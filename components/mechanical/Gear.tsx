import { gearPath, boltCircles } from "@/lib/gear";

type GearProps = {
  teeth: number;
  radius: number;
  direction?: "cw" | "ccw";
  duration: number;
  bolts?: number;
  className?: string;
};

export function Gear({
  teeth,
  radius,
  direction = "cw",
  duration,
  bolts = 6,
  className = "",
}: GearProps) {
  const outerRadius = radius;
  const innerRadius = radius * 0.82;
  const holeRadius = radius * 0.28;
  const boltRadius = radius * 0.55;
  const boltR = radius * 0.045;

  const d = gearPath(teeth, outerRadius, innerRadius, holeRadius);
  const bolts_ = boltCircles(bolts, boltRadius, boltR);
  const spin = direction === "cw" ? "gear-spin-cw" : "gear-spin-ccw";

  return (
    <svg
      viewBox={`${-radius - 4} ${-radius - 4} ${(radius + 4) * 2} ${(radius + 4) * 2}`}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`gear-fill-${teeth}-${radius}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--copper-light)" />
          <stop offset="45%" stopColor="var(--copper)" />
          <stop offset="100%" stopColor="var(--copper-dark)" />
        </linearGradient>
      </defs>
      <g
        className={spin}
        style={{ animationDuration: `${duration}s` }}
      >
        <path
          d={d}
          fill={`url(#gear-fill-${teeth}-${radius})`}
          fillRule="evenodd"
          stroke="var(--copper-dark)"
          strokeWidth={1}
        />
        {bolts_.map((c, i) => (
          <circle
            key={i}
            cx={c.split(",")[0]}
            cy={c.split(",")[1]}
            r={boltR}
            fill="var(--copper-dark)"
          />
        ))}
      </g>
    </svg>
  );
}
