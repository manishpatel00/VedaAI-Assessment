import { useAssignmentStore } from '../store/useAssignmentStore';


const Icons = {
  Sparkle: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.8a2 2 0 001.3 1.3L21 12l-5.8 1.9a2 2 0 00-1.3 1.3L12 21l-1.9-5.8a2 2 0 00-1.3-1.3L3 12l5.8-1.9a2 2 0 001.3-1.3L12 3z" />
    </svg>
  ),
  Plus: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  ArrowRight: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Wand: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8L19 13" />
      <path d="M17.8 6.2L19 5" />
      <path d="M3 21l9-9" />
      <path d="M12.2 6.2L11 5" />
    </svg>
  ),
  Rubric: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Key: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
  Gauge: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1117.32 0" />
    </svg>
  ),
  Brain: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 11-5 0v-1.05A2.5 2.5 0 014.5 16v-1a2.5 2.5 0 01.5-4.95A2.5 2.5 0 015 7.5a2.5 2.5 0 012-2.45V4.5A2.5 2.5 0 019.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 105 0v-1.05A2.5 2.5 0 0019.5 16v-1a2.5 2.5 0 00-.5-4.95A2.5 2.5 0 0019 7.5a2.5 2.5 0 00-2-2.45V4.5A2.5 2.5 0 0014.5 2z" />
    </svg>
  ),
  FileScan: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  ),
  Shield: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Translate: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8l6 6" />
      <path d="M4 14l6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="M22 22l-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  ),
  Lock: (p: { className?: string }) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
};

/* ──────────────────────────────────────────────
   Tool definitions — clean, professional
   ────────────────────────────────────────────── */
interface Tool {
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  accent: string;
  iconBg: string;
  status: 'available' | 'beta' | 'soon';
  category: 'Generation' | 'Assessment' | 'Analysis';
}

const tools: Tool[] = [
  {
    name: 'Question Generator',
    description: 'Generate custom questions from any topic or uploaded document using AI.',
    icon: Icons.Wand,
    accent: 'border-orange-100',
    iconBg: 'bg-orange-50 text-orange-600',
    status: 'available',
    category: 'Generation',
  },
  {
    name: 'Rubric Builder',
    description: 'Create detailed marking rubrics and grading criteria automatically.',
    icon: Icons.Rubric,
    accent: 'border-blue-100',
    iconBg: 'bg-blue-50 text-blue-600',
    status: 'available',
    category: 'Assessment',
  },
  {
    name: 'Answer Key Generator',
    description: 'Auto-generate comprehensive answer keys with detailed explanations.',
    icon: Icons.Key,
    accent: 'border-green-100',
    iconBg: 'bg-green-50 text-green-600',
    status: 'available',
    category: 'Assessment',
  },
  {
    name: 'Difficulty Analyzer',
    description: 'Analyze and balance question difficulty across your entire paper.',
    icon: Icons.Gauge,
    accent: 'border-violet-100',
    iconBg: 'bg-violet-50 text-violet-600',
    status: 'available',
    category: 'Analysis',
  },
  {
    name: "Bloom's Taxonomy Mapper",
    description: "Map questions to Bloom's Taxonomy levels for comprehensive assessment.",
    icon: Icons.Brain,
    accent: 'border-amber-100',
    iconBg: 'bg-amber-50 text-amber-600',
    status: 'beta',
    category: 'Analysis',
  },
  {
    name: 'PDF Import & Parse',
    description: 'Import existing question papers and reuse content intelligently.',
    icon: Icons.FileScan,
    accent: 'border-pink-100',
    iconBg: 'bg-pink-50 text-pink-600',
    status: 'available',
    category: 'Generation',
  },
  {
    name: 'Plagiarism Checker',
    description: 'Verify question originality across a vast database of public papers.',
    icon: Icons.Shield,
    accent: 'border-cyan-100',
    iconBg: 'bg-cyan-50 text-cyan-600',
    status: 'soon',
    category: 'Assessment',
  },
  {
    name: 'Multi-language Translation',
    description: 'Instantly translate question papers into 50+ regional languages.',
    icon: Icons.Translate,
    accent: 'border-teal-100',
    iconBg: 'bg-teal-50 text-teal-600',
    status: 'soon',
    category: 'Generation',
  },
];

/* ──────────────────────────────────────────────
   Tool Card
   ────────────────────────────────────────────── */
function ToolCard({ tool, onClick }: { tool: Tool; onClick: () => void }) {
  const isLocked = tool.status === 'soon';

  return (
    <button
      onClick={isLocked ? undefined : onClick}
      disabled={isLocked}
      className={`group text-left bg-white rounded-2xl p-5 border ${tool.accent} transition-all relative ${
        isLocked
          ? 'opacity-60 cursor-not-allowed'
          : 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer'
      }`}
    >
      {/* Status badge */}
      {tool.status !== 'available' && (
        <div className="absolute top-3 right-3">
          {tool.status === 'beta' ? (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
              Beta
            </span>
          ) : (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 flex items-center gap-1">
              <Icons.Lock className="w-2.5 h-2.5" />
              Soon
            </span>
          )}
        </div>
      )}

      <div className="flex items-start gap-4 mb-3">
        <div className={`w-12 h-12 rounded-xl ${tool.iconBg} flex items-center justify-center flex-shrink-0`}>
          <tool.icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0 pr-6">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
            {tool.category}
          </div>
          <div className="font-bold text-gray-900 text-sm leading-tight">
            {tool.name}
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed mb-4">
        {tool.description}
      </p>

      {!isLocked && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
          <span>Open tool</span>
          <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      )}
    </button>
  );
}

/* ──────────────────────────────────────────────
   AIToolkitView
   ────────────────────────────────────────────── */
export default function AIToolkitView() {
  const { setView, resetForm } = useAssignmentStore();
  const availableCount = tools.filter((t) => t.status !== 'soon').length;

  return (
    <div className="flex-1 overflow-y-auto pb-32 lg:pb-8 bg-[#fafafa]">
      {/* ─────────── Page Header ─────────── */}
      <div className="px-5 lg:px-8 pt-5 pb-4 lg:pt-6 lg:pb-5 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-sm shadow-violet-300" />
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
            AI Teacher's Toolkit
          </h1>
        </div>
        <p className="text-sm text-gray-500 ml-5">
          Powerful AI tools designed to streamline your teaching workflow
        </p>
      </div>

      {/* ─────────── Hero CTA ─────────── */}
      <section className="px-5 lg:px-8 pt-6">
        <div
          className="relative overflow-hidden rounded-3xl text-white p-7 lg:p-10"
          style={{
            background:
              'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
          }}
        >
          {/* Decorative orange glow */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-25 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #FF5623 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute -bottom-32 -left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #FF7950 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Icons.Sparkle className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em]">
                Powered by VedaAI
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-3">
              Create your first AI assessment
            </h2>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 max-w-xl">
              Generate perfectly structured question papers in seconds using our
              advanced AI engine. No prompts, no setup — just results.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  resetForm();
                  setView('create-assignment');
                }}
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-sm"
              >
                <Icons.Plus className="w-4 h-4" />
                Create Assignment Now
              </button>
              <button
                onClick={() => setView('home')}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full transition-all text-sm border border-white/15"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Tool Stats ─────────── */}
      <section className="px-5 lg:px-8 pt-8 pb-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Available Tools</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {availableCount} tools ready to use · {tools.length - availableCount} coming soon
            </p>
          </div>
          {/* Filter chips */}
          <div className="hidden lg:flex items-center gap-2">
            {['All', 'Generation', 'Assessment', 'Analysis'].map((cat, i) => (
              <button
                key={cat}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                  i === 0
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Tools Grid ─────────── */}
      <section className="px-5 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              tool={tool}
              onClick={() => {
                if (tool.name === 'Question Generator' || tool.name === 'PDF Import & Parse') {
                  resetForm();
                  setView('create-assignment');
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* ─────────── Bottom Banner ─────────── */}
      <section className="px-5 lg:px-8 pb-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white">
              <Icons.Sparkle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm mb-1">
                Have a tool idea?
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We're constantly expanding our toolkit. Send us your suggestions
                and shape the future of AI-powered teaching.
              </p>
            </div>
          </div>
          <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors flex-shrink-0">
            Send feedback
          </button>
        </div>
      </section>
    </div>
  );
}
