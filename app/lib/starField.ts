interface Star {
  x: number;
  y: number;
  z: number;
}

export interface StarFieldOptions {
  count: number;
  intensity: number;
  reduced: boolean;
}

export interface StarField {
  draw(progress: number, camX: number, camY: number): void;
  dispose(): void;
}

export const createStarField = (
  canvas: HTMLCanvasElement,
  { count, intensity, reduced }: StarFieldOptions
): StarField | null => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const stars: Star[] = Array.from({ length: count }, () => ({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    z: 0.25 + Math.random() * 0.75,
  }));

  let w = 0;
  let h = 0;

  const resize = () => {
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (!cw || !ch || (cw === w && ch === h)) return;
    w = cw;
    h = ch;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  return {
    draw(progress: number, camX: number, camY: number) {
      if (!w || !h) return;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      const driftX = camX * 0.15;
      const driftY = camY * 0.15;
      for (const s of stars) {
        const px = (s.x + driftX + 1) * 0.5 * w;
        const py = (s.y + driftY + 1) * 0.5 * h;
        const sz = s.z * 1.8;
        ctx.fillRect(px, py, sz, sz);
      }
    },
    dispose() {
      ro.disconnect();
    },
  };
};
