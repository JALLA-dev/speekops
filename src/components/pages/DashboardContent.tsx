'use client';

import { Sparkline, AreaChart, BarChart, DonutChart } from '@/components/charts';

export default function DashboardContent() {
  return (
    <section className="page active">
      <div className="dashboard-header">
        <div className="container-wide">
          <div className="dashboard-header-content">
            <div className="dashboard-greeting">
              <h1>
                Welcome back, <span className="gradient-text">Alex</span> 👋
              </h1>
              <p>Here&apos;s what&apos;s happening with your AI operations today</p>
            </div>
            <div className="dashboard-actions">
              <button className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Notifications
              </button>
              <button className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                New Release
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="container-wide">
          {/* KPI Cards */}
          <div className="kpi-grid">
            <div className="kpi-card pink">
              <div className="kpi-header">
                <div className="kpi-label">Total Deployments</div>
                <div className="kpi-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </div>
              <div className="kpi-value">1,284</div>
              <span className="kpi-change positive">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                +12.5%
              </span>
              <Sparkline color="#ec4899" />
            </div>

            <div className="kpi-card cyan">
              <div className="kpi-header">
                <div className="kpi-label">Voice Commands</div>
                <div className="kpi-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <div className="kpi-value">8,742</div>
              <span className="kpi-change positive">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                +24.8%
              </span>
              <Sparkline color="#06b6d4" />
            </div>

            <div className="kpi-card orange">
              <div className="kpi-header">
                <div className="kpi-label">Success Rate</div>
                <div className="kpi-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="kpi-value">99.8%</div>
              <span className="kpi-change positive">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                +0.3%
              </span>
              <Sparkline color="#f97316" />
            </div>

            <div className="kpi-card emerald">
              <div className="kpi-header">
                <div className="kpi-label">Time Saved</div>
                <div className="kpi-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="kpi-value">2,456h</div>
              <span className="kpi-change positive">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                +18.2%
              </span>
              <Sparkline color="#10b981" />
            </div>
          </div>

          {/* Main Charts Row */}
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <div className="card-title">Operations Overview</div>
                  <div className="card-subtitle">Deployment &amp; voice command activity over time</div>
                </div>
                <button className="card-action">This Year</button>
              </div>
              <AreaChart />
            </div>

            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <div className="card-title">Environment Distribution</div>
                  <div className="card-subtitle">Current release breakdown</div>
                </div>
              </div>
              <DonutChart />
            </div>
          </div>

          {/* Second Row */}
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <div className="card-title">Weekly Activity</div>
                  <div className="card-subtitle">Deploys vs Voice commands this week</div>
                </div>
                <button className="card-action">Export</button>
              </div>
              <BarChart />
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}></span>
                  Deploys
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ background: 'linear-gradient(135deg, #ec4899, #f43f5e)' }}></span>
                  Voice Commands
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <div className="card-title">Recent Activity</div>
                  <div className="card-subtitle">Latest operations across all systems</div>
                </div>
              </div>
              <div className="activity-feed">
                <ActivityItem avatar="SK" avatarClass="g1" title="Production deployment v2.4.1" meta="Sarah Kim · 2 min ago" badge="Live" badgeClass="success" />
                <ActivityItem avatar="MJ" avatarClass="g2" title="Voice command: Scale servers" meta="Mike Johnson · 8 min ago" badge="Done" badgeClass="success" />
                <ActivityItem avatar="AL" avatarClass="g3" title="Database backup completed" meta="AI Agent · 15 min ago" badge="Auto" badgeClass="info" />
                <ActivityItem avatar="RC" avatarClass="g4" title="Staging rollback initiated" meta="Rachel Chen · 32 min ago" badge="Review" badgeClass="warning" />
                <ActivityItem avatar="TB" avatarClass="g5" title="Security scan passed" meta="Tom Brady · 1 hour ago" badge="Clean" badgeClass="success" />
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="dashboard-grid-3">
            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <div className="card-title">System Status</div>
                  <div className="card-subtitle">Real-time health monitoring</div>
                </div>
              </div>
              <div className="status-grid">
                <StatusItem name="API Gateway" value="99.99%" status="online" />
                <StatusItem name="Database Cluster" value="12ms" status="online" />
                <StatusItem name="Voice Engine" value="High Load" status="warning" />
                <StatusItem name="CDN Network" value="100%" status="online" />
                <StatusItem name="ML Models" value="Healthy" status="online" />
              </div>
            </div>

            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <div className="card-title">Quick Actions</div>
                  <div className="card-subtitle">Common tasks at your fingertips</div>
                </div>
              </div>
              <div className="quick-actions">
                <QuickAction icon={<DeployIcon />} label="Deploy" gradient="qa-g1" />
                <QuickAction icon={<MicIcon />} label="Voice Cmd" gradient="qa-g2" />
                <QuickAction icon={<ChartIcon />} label="Analytics" gradient="qa-g3" />
                <QuickAction icon={<SettingsIcon />} label="Settings" gradient="qa-g4" />
              </div>
            </div>

            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <div className="card-title">AI Insights</div>
                  <div className="card-subtitle">Smart recommendations</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <InsightCard
                  icon="💡"
                  label="Recommendation"
                  labelColor="#a5b4fc"
                  bgColor="rgba(99, 102, 241, 0.1)"
                  borderColor="rgba(99, 102, 241, 0.3)"
                  text="Schedule the next release for Tuesday 3AM UTC to minimize impact on users."
                />
                <InsightCard
                  icon="🎯"
                  label="Achievement"
                  labelColor="#6ee7b7"
                  bgColor="rgba(16, 185, 129, 0.1)"
                  borderColor="rgba(16, 185, 129, 0.3)"
                  text="You've saved 2,456 hours this quarter. That's a 18% improvement!"
                />
                <InsightCard
                  icon="⚡"
                  label="Alert"
                  labelColor="#fcd34d"
                  bgColor="rgba(245, 158, 11, 0.1)"
                  borderColor="rgba(245, 158, 11, 0.3)"
                  text="Voice engine experiencing higher than usual load. Consider scaling up."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityItem({ avatar, avatarClass, title, meta, badge, badgeClass }: {
  avatar: string;
  avatarClass: string;
  title: string;
  meta: string;
  badge: string;
  badgeClass: string;
}) {
  return (
    <div className="activity-item">
      <div className={`activity-avatar ${avatarClass}`}>{avatar}</div>
      <div className="activity-content">
        <div className="activity-title">{title}</div>
        <div className="activity-meta">{meta}</div>
      </div>
      <span className={`activity-badge ${badgeClass}`}>{badge}</span>
    </div>
  );
}

function StatusItem({ name, value, status }: { name: string; value: string; status: string }) {
  return (
    <div className="status-item">
      <div className="status-left">
        <div className={`status-indicator ${status}`}></div>
        <span className="status-name">{name}</span>
      </div>
      <span className="status-value">{value}</span>
    </div>
  );
}

function QuickAction({ icon, label, gradient }: { icon: React.ReactNode; label: string; gradient: string }) {
  return (
    <button className="quick-action-btn">
      <div className={`quick-action-icon ${gradient}`}>{icon}</div>
      <span className="quick-action-label">{label}</span>
    </button>
  );
}

function InsightCard({ icon, label, labelColor, bgColor, borderColor, text }: {
  icon: string;
  label: string;
  labelColor: string;
  bgColor: string;
  borderColor: string;
  text: string;
}) {
  return (
    <div style={{ padding: '16px', background: bgColor, border: `1px solid ${borderColor}`, borderRadius: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <span style={{ fontSize: '20px' }}>{icon}</span>
        <span style={{ fontSize: '13px', fontWeight: 700, color: labelColor, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {label}
        </span>
      </div>
      <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function DeployIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
