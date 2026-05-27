import { useAssignmentStore } from '../store/useAssignmentStore';

/* ──────────────────────────────────────────────
   Icon set — clean line icons, no emojis
   ────────────────────────────────────────────── */
const Icons = {
  Sparkle: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.8a2 2 0 001.3 1.3L21 12l-5.8 1.9a2 2 0 00-1.3 1.3L12 21l-1.9-5.8a2 2 0 00-1.3-1.3L3 12l5.8-1.9a2 2 0 001.3-1.3L12 3z" />
    </svg>
  ),
  FileText: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  CheckCircle: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  BookOpen: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  ),
  HelpCircle: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Plus: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  ArrowRight: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  TrendingUp: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Clock: (props: { className?: string }) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

/* ──────────────────────────────────────────────
   Stat Card — clean, no emoji
   ────────────────────────────────────────────── */
function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: number;
  icon: React.FC<{ className?: string }>;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl ${accent} flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 leading-none mb-1.5">{value}</div>
      <div className="text-xs text-gray-500 font-medium">{label}</div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Quick Action Card
   ────────────────────────────────────────────── */
function QuickActionCard({
  title,
  description,
  icon: Icon,
  accent,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl ${accent} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-900 text-sm mb-1">{title}</div>
          <div className="text-xs text-gray-500 leading-relaxed">{description}</div>
        </div>
        <Icons.ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}

/* ──────────────────────────────────────────────
   HomeView
   ────────────────────────────────────────────── */
export default function HomeView() {
  const { setView, resetForm, assignments } = useAssignmentStore();

  const totalQuestions = assignments.reduce(
    (sum, a) =>
      sum + (a.generatedPaper?.sections.reduce((s, sec) => s + sec.questions.length, 0) || 0),
    0
  );

  const stats = [
    {
      label: 'Total Assignments',
      value: assignments.length,
      icon: Icons.FileText,
      accent: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Completed Papers',
      value: assignments.filter((a) => a.status === 'completed').length,
      icon: Icons.CheckCircle,
      accent: 'bg-green-50 text-green-600',
    },
    {
      label: 'Subjects Covered',
      value: new Set(assignments.map((a) => a.subject)).size,
      icon: Icons.BookOpen,
      accent: 'bg-violet-50 text-violet-600',
    },
    {
      label: 'Total Questions',
      value: totalQuestions,
      icon: Icons.HelpCircle,
      accent: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-32 lg:pb-8 bg-[#fafafa]">
      {/* ─────────── Hero ─────────── */}
      <section className="px-5 lg:px-8 pt-6 pb-8">
        <div
          className="relative overflow-hidden rounded-3xl text-white"
          style={{
            background:
              'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
          }}
        >
          {/* Decorative orange glow */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #FF5623 0%, transparent 70%)',
            }}
          />
          {/* Decorative orange glow #2 */}
          <div
            className="absolute -bottom-32 -left-10 w-60 h-60 rounded-full opacity-10 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #FF7950 0%, transparent 70%)',
            }}
          />

          <div className="relative px-7 py-10 lg:px-12 lg:py-14 max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <Icons.Sparkle className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em]">
                AI Assessment Creator
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-3">
              Welcome back, John Doe
            </h1>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-7 max-w-xl">
              Create AI-powered question papers, manage assignments, and track
              student progress — all in one elegant workspace.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  resetForm();
                  setView('create-assignment');
                }}
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-sm"
              >
                <Icons.Plus className="w-4 h-4" />
                Create New Assignment
              </button>
              <button
                onClick={() => setView('assignments')}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full transition-all text-sm border border-white/15"
              >
                View Assignments
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Overview Stats ─────────── */}
      <section className="px-5 lg:px-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Overview</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Your assessment activity at a glance
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-gray-500">
            <Icons.Clock className="w-3.5 h-3.5" />
            <span>Last updated just now</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ─────────── Quick Actions ─────────── */}
      <section className="px-5 lg:px-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <QuickActionCard
            title="Create Assignment"
            description="Generate AI question papers tailored to your students"
            icon={Icons.Plus}
            accent="bg-orange-50 text-orange-600"
            onClick={() => {
              resetForm();
              setView('create-assignment');
            }}
          />
          <QuickActionCard
            title="View Assignments"
            description={`${assignments.length} assignment${assignments.length !== 1 ? 's' : ''} ready to manage`}
            icon={Icons.FileText}
            accent="bg-blue-50 text-blue-600"
            onClick={() => setView('assignments')}
          />
          <QuickActionCard
            title="AI Toolkit"
            description="Advanced tools for question generation and grading"
            icon={Icons.Sparkle}
            accent="bg-violet-50 text-violet-600"
            onClick={() => setView('ai-toolkit')}
          />
        </div>
      </section>

      {/* ─────────── Recent Assignments ─────────── */}
      {assignments.length > 0 && (
        <section className="px-5 lg:px-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Assignments</h2>
            <button
              onClick={() => setView('assignments')}
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors flex items-center gap-1"
            >
              View all
              <Icons.ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {assignments.slice(0, 4).map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <Icons.FileText className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-900 text-sm truncate">
                      {a.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-3">
                      <span>{a.subject || 'No subject'}</span>
                      {a.dueDate && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>Due {a.dueDate}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <span
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-3 ${
                    a.status === 'completed'
                      ? 'bg-green-50 text-green-700'
                      : a.status === 'generating'
                        ? 'bg-orange-50 text-orange-700'
                        : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────── Insights Strip ─────────── */}
      <section className="px-5 lg:px-8 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 lg:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white">
              <Icons.TrendingUp className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                Save 10+ hours per week
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                Teachers using VedaAI generate question papers 8x faster than
                manual creation. Start your first AI-powered assignment now.
              </p>
              <button
                onClick={() => {
                  resetForm();
                  setView('create-assignment');
                }}
                className="text-sm font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 transition-colors"
              >
                Get started
                <Icons.ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
