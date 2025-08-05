// 격자 패턴 SVG 컴포넌트
export const GridPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.9] z-0"
    style={{ top: '-153px', left: '-153px', width: '634px', height: '900px' }}
  >
    <defs>
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <path
          d="M 50 0 L 0 0 0 50"
          fill="none"
          stroke="#EFF8FF"
          strokeWidth="3"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);
