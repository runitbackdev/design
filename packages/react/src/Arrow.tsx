export const surfaceArrowNudge =
  "data-[side=bottom]:-top-1.75 data-[side=top]:-bottom-1.75 data-[side=top]:rotate-180";

export function SurfaceArrowSvg() {
  return (
    <svg width="14" height="7" viewBox="0 0 14 7" className="fill-surface">
      <path d="M0 7 L7 0 L14 7" className="stroke-line" strokeWidth="1" fill="none" />
      <path d="M0 7 L7 0 L14 7" />
    </svg>
  );
}
