"use client";

export function RadarAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
      <svg
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 800 800"
        fill="none"
      >
        {/* Concentric radar rings */}
        {[100, 180, 260, 340].map((r, i) => (
          <circle
            key={r}
            cx="400"
            cy="400"
            r={r}
            stroke="#17A36B"
            strokeWidth="0.75"
            opacity={0.4 - i * 0.08}
            className="animate-radar-pulse"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}

        {/* Sweep line */}
        <line
          x1="400"
          y1="400"
          x2="400"
          y2="60"
          stroke="url(#sweepGradient)"
          strokeWidth="1"
          className="origin-center animate-radar-sweep"
        />

        {/* Signal dots */}
        {[
          { cx: 320, cy: 280, delay: "0s" },
          { cx: 480, cy: 350, delay: "1.2s" },
          { cx: 370, cy: 460, delay: "2.4s" },
          { cx: 520, cy: 270, delay: "0.8s" },
          { cx: 280, cy: 420, delay: "1.8s" },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="3"
            fill="#B9F24A"
            className="animate-signal-blink"
            style={{ animationDelay: dot.delay }}
          />
        ))}

        <defs>
          <linearGradient id="sweepGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#17A36B" stopOpacity="0" />
            <stop offset="100%" stopColor="#17A36B" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
