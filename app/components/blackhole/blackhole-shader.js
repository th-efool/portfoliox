/**
 * Raymarching shader for black hole visualization using Three.js TSL.
 */

import {
  vec2,
  vec3,
  vec4,
  float,
  Fn,
  length,
  normalize,
  cross,
  dot,
  sin,
  cos,
  atan,
  asin,
  sqrt,
  pow,
  fract,
  clamp,
  smoothstep,
  mix,
  floor,
  step,
  sign,
  Loop,
  Break,
  If,
  screenUV
} from 'three/tsl';

// Hash functions for pseudo-random number generation
const hash21 = Fn(([p]) => {
  const n = sin(dot(p, vec2(127.1, 311.7))).mul(43758.5453);
  return fract(n);
});

const hash31 = Fn(([p]) => {
  const n = sin(dot(p, vec3(127.1, 311.7, 74.7))).mul(43758.5453);
  return fract(n);
});

const hash22 = Fn(([p]) => {
  const px = fract(sin(dot(p, vec2(127.1, 311.7))).mul(43758.5453));
  const py = fract(sin(dot(p, vec2(269.5, 183.3))).mul(43758.5453));
  return vec2(px, py);
});

// 3D value noise
const noise3D = Fn(([p]) => {
  const i = floor(p);
  const f = fract(p);
  const u = f.mul(f).mul(float(3.0).sub(f.mul(2.0)));

  const a = hash31(i);
  const b = hash31(i.add(vec3(1, 0, 0)));
  const c = hash31(i.add(vec3(0, 1, 0)));
  const d = hash31(i.add(vec3(1, 1, 0)));
  const e = hash31(i.add(vec3(0, 0, 1)));
  const f2 = hash31(i.add(vec3(1, 0, 1)));
  const g = hash31(i.add(vec3(0, 1, 1)));
  const h = hash31(i.add(vec3(1, 1, 1)));

  return mix(
    mix(mix(a, b, u.x), mix(c, d, u.x), u.y),
    mix(mix(e, f2, u.x), mix(g, h, u.x), u.y),
    u.z
  );
});

// Fractal Brownian Motion - 4 octaves of layered noise
const fbm = Fn(([p, lacunarity, persistence]) => {
  const value = float(0.0).toVar();
  const amplitude = float(0.5).toVar();
  const pos = p.toVar();

  value.addAssign(noise3D(pos).mul(amplitude));
  pos.mulAssign(lacunarity);
  amplitude.mulAssign(persistence);

  value.addAssign(noise3D(pos).mul(amplitude));
  pos.mulAssign(lacunarity);
  amplitude.mulAssign(persistence);

  value.addAssign(noise3D(pos).mul(amplitude));

  return value;
});

// Compact blackbody color lookup using 11 key temperature points (CIE 1931 2-deg, sRGB)
// Reduced from 120 entries for GPU performance — linear interpolation between key points
const BB_TEMPS = [1000, 2000, 3000, 4000, 5000, 6500, 8000, 10000, 15000, 25000, 40000];
const BB_R =     [1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.7874, 0.6268, 0.4749, 0.3917, 0.3563];
const BB_G =     [0.0337, 0.2647, 0.487, 0.6636, 0.7992, 0.9436, 0.8187, 0.7039, 0.5824, 0.5083, 0.4745];
const BB_B =     [0.0, 0.0033, 0.1411, 0.3583, 0.6045, 0.9621, 1.0, 1.0, 1.0, 1.0, 1.0];

// Convert temperature to RGB using compact lookup with linear interpolation
const blackbodyColor = Fn(([tempK]) => {
  const temp = clamp(tempK, float(1000.0), float(40000.0));

  const r = float(0.0).toVar();
  const g = float(0.0).toVar();
  const b = float(0.0).toVar();

  for (let i = 0; i < BB_TEMPS.length - 1; i++) {
    const tLow = float(BB_TEMPS[i]);
    const tHigh = float(BB_TEMPS[i + 1]);

    const inRange = step(tLow, temp).mul(step(temp, tHigh));
    const t = temp.sub(tLow).div(tHigh.sub(tLow));

    r.addAssign(mix(float(BB_R[i]), float(BB_R[i + 1]), t).mul(inRange));
    g.addAssign(mix(float(BB_G[i]), float(BB_G[i + 1]), t).mul(inRange));
    b.addAssign(mix(float(BB_B[i]), float(BB_B[i + 1]), t).mul(inRange));
  }

  return vec3(r, g, b);
});

// Procedural star field using grid-based placement
const createStarField = (uniforms) => Fn(([rayDir]) => {
  const theta = atan(rayDir.z, rayDir.x);
  const phi = asin(clamp(rayDir.y, float(-1.0), float(1.0)));

  const gridScale = float(60.0).div(uniforms.starSize);
  const scaledCoord = vec2(theta, phi).mul(gridScale);
  const cell = floor(scaledCoord);
  const cellUV = fract(scaledCoord);

  const cellHash = hash21(cell);
  const starProb = step(float(1.0).sub(uniforms.starDensity), cellHash);

  const starPos = hash22(cell.add(42.0)).mul(0.8).add(0.1);
  const distToStar = length(cellUV.sub(starPos));

  const baseSizeVar = hash21(cell.add(100.0)).mul(0.03).add(0.01);
  const finalStarSize = baseSizeVar.mul(uniforms.starSize);

  const starCore = smoothstep(finalStarSize, float(0.0), distToStar);
  const starGlow = smoothstep(finalStarSize.mul(3.0), float(0.0), distToStar).mul(0.3);
  const starIntensity = starCore.add(starGlow).mul(starProb);

  const colorTemp = hash21(cell.add(200.0));
  const starColor = mix(vec3(0.8, 0.9, 1.0), vec3(1.0, 0.95, 0.8), colorTemp);

  return starColor.mul(starIntensity).mul(uniforms.starBrightness);
});

