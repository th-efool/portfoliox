/**
 * Tuning constants and pure helpers for the Singularity scroll.
 *
 * Everything here is layout maths with no DOM in it. The two `Tuning` objects
 * are the only place the desktop and phone (mockup 1a) choreographies differ in
 * numbers — the structure of the animation is identical, so `Singularity.tsx`
 * reads one of these and never branches on viewport again.
 */

export const clamp = (v: number, a: number, b: number) =>
  Math.min(b, Math.max(a, v));

/** Smoothstep — the ease used for every reveal on the page. */
export const smooth = (t: number) => t * t * (3 - 2 * t);

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * The mockup's `motionIntensity` slider (0–2), at the value the design was
 * signed off on. It scales two things: how far the project cards start off to
 * the side before sweeping in, and how hard scrolling streaks the stars. Raise
 * toward 1 for the full-width sweep; 0 pins the cards and stills the warp.
 */
export const MOTION_INTENSITY = 0.1;

/** Depth crossed by the starfield over one full intro scroll. */
export const SPREAD = 7;

/** The phone choreography kicks in below this width (matches singularity.css). */
export const MOBILE_QUERY = "(max-width: 767px)";

/** Mosaic cells, as fractions of the stage box, in card order. */
type Cell = { x: number; y: number; w: number; h: number };

export interface Tuning {
  /** Where the cards land once they've settled — one cell per project. */
  mosaic: Cell[];
  /** Fraction of the chapter's scroll spent bringing cards onto the deck. */
  enterEnd: number;
  /** Fraction spent unfolding the deck into the mosaic afterwards. */
  settleWindow: number;
  /** Deck card size: min(deckMaxW, W * deckWidthFrac), height min(H * deckHeightFrac, w * deckAspect). */
  deckMaxW: number;
  deckWidthFrac: number;
  deckHeightFrac: number;
  deckAspect: number;
  /** Mosaic gutters, as fractions of the stage. */
  gapXFrac: number;
  gapYFrac: number;
  /** How far off to the side a card starts, as a fraction of stage width. */
  sweepFrac: number;
  /** How far below the deck a card starts, in px. */
  riseY: number;
  /** A card shows its description only once its cell is at least this big. */
  descMinH: number;
  descMinW: number;
  descMaxH: number;
  descCollapseH: number;
  /** Card titles shrink in the narrow mosaic cells. */
  titleNarrowW: number;
  titleNarrowSize: number;
  titleSize: number;
  /** Hero reveal: how far a word / the supporting block rises into place, in px. */
  wordRise: number;
  restRise: number;
  /** How much proper time slows by the bottom of the page (the τ clock). */
  dilRate: number;
  /** Stars: fewer on phones, fewer again when motion is reduced. */
  starCount: number;
  starCountReduced: number;
  /**
   * The comet's position. Desktop measures against the timeline track itself;
   * the phone measures against the whole (unpinned) section, which reaches the
   * end of the list a little sooner.
   */
  cometFromSection: boolean;
  cometProbe: number;
  /** Track padding the comet has to sit inside, and the per-row dot offset. */
  trackInset: number;
  rowDotOffset: number;
  rowFlareRange: number;
  /** τ readout precision. */
  tauDecimals: number;
}

export const DESKTOP: Tuning = {
  mosaic: [
    { x: 0, y: 0, w: 0.33, h: 0.58 },
    { x: 0.34, y: 0, w: 0.32, h: 0.38 },
    { x: 0.67, y: 0, w: 0.33, h: 0.48 },
    { x: 0, y: 0.6, w: 0.33, h: 0.4 },
    { x: 0.34, y: 0.4, w: 0.32, h: 0.6 },
    { x: 0.67, y: 0.5, w: 0.33, h: 0.5 },
  ],
  enterEnd: 0.74,
  settleWindow: 0.2,
  deckMaxW: 640,
  deckWidthFrac: 0.6,
  deckHeightFrac: 0.95,
  deckAspect: 0.84,
};