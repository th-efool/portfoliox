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
  { count }: StarFieldOptions
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
      ctx.fillStyle = "#ffffff";
      for (const s of stars) {
        const px = (s.x + camX * 0.1 + 1) * 0.5 * w;
        const py = (s.y + camY * 0.1 + 1) * 0.5 * h;
        ctx.fillRect(px, py, 1.5, 1.5);
      }
    },
    dispose() {
      ro.disconnect();
    },
  };
};
