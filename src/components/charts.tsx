export function Sparkline({ color = '#a855f7' }: { color?: string }) {
  const points = [15, 25, 20, 35, 30, 45, 40, 55, 50, 65, 60, 75, 70, 85];
  const width = 200;
  const height = 40;
  const step = width / (points.length - 1);

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${height - (p / 100) * height}`)
    .join(' ');

  const areaPath = `${pathData} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg className="kpi-sparkline" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`spark-${color.replace('#', '')}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#spark-${color.replace('#', '')})`} />
      <path d={pathData} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AreaChart() {
  const width = 800;
  const height = 280;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const data1 = [30, 45, 35, 60, 55, 75, 70, 85, 80, 95, 90, 110];
  const data2 = [20, 30, 25, 40, 35, 55, 50, 60, 55, 70, 65, 80];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const max = 120;

  const toPath = (data: number[]) =>
    data
      .map((v, i) => {
        const x = padding.left + (i / (data.length - 1)) * chartWidth;
        const y = padding.top + chartHeight - (v / max) * chartHeight;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');

  const toArea = (data: number[]) =>
    `${toPath(data)} L ${padding.left + chartWidth} ${padding.top + chartHeight} L ${padding.left} ${padding.top + chartHeight} Z`;

  return (
    <div>
      <svg className="chart-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="chartGrad1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chartGrad2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3, 4].map((i) => {
          const y = padding.top + (i / 4) * chartHeight;
          return (
            <line
              key={i}
              x1={padding.left}
              y1={y}
              x2={padding.left + chartWidth}
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="4 4"
            />
          );
        })}

        {[0, 30, 60, 90, 120].map((v, i) => (
          <text
            key={i}
            x={padding.left - 10}
            y={padding.top + chartHeight - (i / 4) * chartHeight + 4}
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            textAnchor="end"
          >
            {v}
          </text>
        ))}

        {labels.map((label, i) => (
          <text
            key={i}
            x={padding.left + (i / (labels.length - 1)) * chartWidth}
            y={height - 8}
            fill="rgba(255,255,255,0.4)"
            fontSize="11"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        <path d={toArea(data1)} fill="url(#chartGrad1)" />
        <path d={toArea(data2)} fill="url(#chartGrad2)" />

        <path d={toPath(data1)} fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d={toPath(data2)} fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {data1.map((v, i) => {
          const x = padding.left + (i / (data1.length - 1)) * chartWidth;
          const y = padding.top + chartHeight - (v / max) * chartHeight;
          return <circle key={i} cx={x} cy={y} r="4" fill="#a855f7" stroke="#05050a" strokeWidth="2" />;
        })}
      </svg>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#a855f7', boxShadow: '0 0 8px #a855f7' }}></span>
          Deployments
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#06b6d4', boxShadow: '0 0 8px #06b6d4' }}></span>
          Voice Commands
        </div>
      </div>
    </div>
  );
}

export function BarChart() {
  const data = [
    { day: 'Mon', a: 65, b: 45 },
    { day: 'Tue', a: 80, b: 55 },
    { day: 'Wed', a: 55, b: 70 },
    { day: 'Thu', a: 90, b: 60 },
    { day: 'Fri', a: 75, b: 85 },
    { day: 'Sat', a: 45, b: 35 },
    { day: 'Sun', a: 70, b: 50 },
  ];

  return (
    <div className="bar-chart">
      {data.map((d, i) => (
        <div key={i} className="bar-group">
          <div className="bar-container">
            <div className="bar primary" style={{ height: `${d.a}%`, animationDelay: `${i * 0.05}s` }}></div>
            <div className="bar secondary" style={{ height: `${d.b}%`, animationDelay: `${i * 0.05 + 0.1}s` }}></div>
          </div>
          <div className="bar-label">{d.day}</div>
        </div>
      ))}
    </div>
  );
}

export function DonutChart() {
  const data = [
    { label: 'Production', value: 42, color: '#a855f7' },
    { label: 'Staging', value: 28, color: '#ec4899' },
    { label: 'Development', value: 18, color: '#06b6d4' },
    { label: 'Testing', value: 12, color: '#f59e0b' },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="donut-container">
      <div className="donut-chart">
        <svg viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="90" cy="90" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="20" />
          {data.map((d, i) => {
            const dash = (d.value / total) * circumference;
            const el = (
              <circle
                key={i}
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke={d.color}
                strokeWidth="20"
                strokeDasharray={`${dash} ${circumference}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                style={{ filter: `drop-shadow(0 0 6px ${d.color})` }}
              />
            );
            offset += dash;
            return el;
          })}
        </svg>
        <div className="donut-center">
          <div className="donut-value">{total}%</div>
          <div className="donut-label">Total</div>
        </div>
      </div>

      <div className="donut-legend">
        {data.map((d, i) => (
          <div key={i} className="donut-legend-item">
            <div className="donut-legend-left">
              <span className="legend-dot" style={{ background: d.color, boxShadow: `0 0 6px ${d.color}` }}></span>
              <span className="donut-legend-label">{d.label}</span>
            </div>
            <span className="donut-legend-value">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
