function pt(r: number, angle: number): string {
  return `${(r * Math.cos(angle)).toFixed(2)},${(r * Math.sin(angle)).toFixed(2)}`;
}

function circle(r: number, sweep: 0 | 1): string {
  return `M ${r},0 A ${r},${r} 0 1,${sweep} ${-r},0 A ${r},${r} 0 1,${sweep} ${r},0 Z`;
}

export function gearPath(
  teeth: number,
  outerRadius: number,
  innerRadius: number,
  holeRadius: number,
  tipRatio = 0.34,
  rootRatio = 0.52
): string {
  const step = (Math.PI * 2) / teeth;
  const halfTip = (tipRatio * step) / 2;
  const halfRoot = (rootRatio * step) / 2;

  const commands: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const center = i * step;
    const p1 = pt(innerRadius, center - halfRoot);
    const p2 = pt(outerRadius, center - halfTip);
    const p3 = pt(outerRadius, center + halfTip);
    const p4 = pt(innerRadius, center + halfRoot);
    commands.push(i === 0 ? `M ${p1}` : `L ${p1}`, `L ${p2}`, `L ${p3}`, `L ${p4}`);
  }
  const body = `${commands.join(" ")} Z`;
  const hole = circle(holeRadius, 1);

  return `${body} ${hole}`;
}

export function boltCircles(count: number, radius: number, boltRadius: number): string[] {
  const step = (Math.PI * 2) / count;
  return Array.from({ length: count }, (_, i) => {
    const angle = i * step;
    return `${(radius * Math.cos(angle)).toFixed(2)},${(radius * Math.sin(angle)).toFixed(2)}`;
  });
}
