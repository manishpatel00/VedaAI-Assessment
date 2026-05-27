import { useAssignmentStore, AppView } from '../store/useAssignmentStore';

/* ──────────────────────────────────────────────
   Figma-exact VedaAI Logo (40x40 orange + "W")
   ────────────────────────────────────────────── */
function VedaAILogo() {
  return (
    
   <div className="flex items-center gap-3">
  {/* Icon mark */}
  <svg
    width="40"
    height="40"
    viewBox="19.714 1.855 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <defs>
      <linearGradient
        id="vedaGrad"
        x1="39.714"
        y1="1.855"
        x2="39.714"
        y2="41.855"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E56820" />
        <stop offset="1" stopColor="#D45E3E" />
      </linearGradient>

      <linearGradient
        id="vedaOverlay"
        x1="34.775"
        y1="11.206"
        x2="34.775"
        y2="33.991"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.33" stopColor="white" stopOpacity="0" />
        <stop offset="0.76" stopColor="#0E1513" />
        <stop offset="1" stopColor="#0E1513" />
      </linearGradient>
    </defs>

    <rect
      x="19.714"
      y="1.855"
      width="40"
      height="40"
      rx="10"
      fill="url(#vedaGrad)"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M42.4413 30.2153C42.4413 30.2153 43.1688 32.1573 43.8355 32.2789H35.4112C33.7141 32.2789 32.1993 31.3079 31.714 29.487L26.805 14.9207C26.805 14.9207 26.381 13.1606 25.7143 12.8571H34.3204C36.0175 12.9179 37.1691 13.5247 37.8357 15.7706L42.4413 30.2153Z"
      fill="white"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M42.4413 30.2153C42.4413 30.2153 43.1688 32.1573 43.8355 32.2789H35.4112C33.7141 32.2789 32.1993 31.3079 31.714 29.487L26.805 14.9207C26.805 14.9207 26.381 13.1606 25.7143 12.8571H34.3204C36.0175 12.9179 37.1691 13.5247 37.8357 15.7706L42.4413 30.2153Z"
      fill="url(#vedaOverlay)"
      opacity="0.2"
    />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.0471 30.2149C37.0471 30.2149 36.3196 32.1569 35.6529 32.2784H44.0772C45.7743 32.2784 47.2891 31.3074 47.7744 29.4865L52.6231 14.9207C52.6231 14.9207 53.0471 13.1606 53.7138 12.8571H45.168C43.4709 12.8571 42.3801 13.464 41.7134 15.7098L37.0471 30.2149Z"
      fill="white"
    />
  </svg>

  {/* Wordmark */}
  <span
    className="
      text-[#303030]
      text-[28px]
      font-bold
      leading-[100%]
      tracking-[-0.06em]
      align-middle
      whitespace-nowrap
    "
    style={{
      fontFamily: '"Bricolage Grotesque", sans-serif',
    }}
  >
    VedaAI
  </span>
</div>
  );
}

function CreateAssignmentButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none"
      aria-label="Create Assignment"
    >
      {/* Outer wrapper providing the gradient border */}
      <div
        className="relative rounded-full p-[2px]"
        style={{
          background: 'linear-gradient(180deg, #FF7950 0%, #C0350A 100%)',
          boxShadow:
            '0 16px 32px rgba(255,121,80,0.18), 0 8px 16px rgba(192,53,10,0.18), inset 0 -1px 2px rgba(255,255,255,0.25)',
        }}
      >
        {/* Inner dark pill */}
        <div
          className="relative rounded-full bg-[#272727] flex items-center justify-center gap-2 px-6 py-2.5"
          style={{
            boxShadow:
              'inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 -1px 2px rgba(177,177,177,0.4)',
          }}
        >
          {/* Sparkles icon */}
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.638 8.638L6.184 4H7.132L8.678 8.638L13.316 10.184V11.132L8.678 12.678L7.132 17.316H6.184L4.638 12.678L0 11.132V10.184L4.638 8.638Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.388 2.388L14.184 0H15.132L15.928 2.388L18.316 3.184V4.132L15.928 4.928L15.132 7.316H14.184L13.388 4.928L11 4.132V3.184L13.388 2.388Z"
              fill="white"
            />
          </svg>
          {/* Label */}
          <span className="text-white text-sm font-semibold tracking-tight">
            Create Assignment
          </span>
        </div>
      </div>
    </button>
  );
}

export default function Sidebar() {
  const { currentView, setView, assignments, resetForm } = useAssignmentStore();
  // Library badge — represents saved resources (mirrors Figma "32" badge)
  const libraryCount = 32 + assignments.length;

  const handleCreateAssignment = () => {
    resetForm();
    setView('create-assignment');
  };

  const navLinks: {
    label: string;
    view: AppView;
    icon: React.ReactNode;
    badge?: number;
  }[] = [
    {
      label: 'Home',
      view: 'home',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      label: 'My Groups',
      view: 'home',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: 'Assignments',
      view: 'assignments',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      label: "AI Teacher's Toolkit",
      view: 'ai-toolkit',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 4V2" />
          <path d="M15 16v-2" />
          <path d="M8 9h2" />
          <path d="M20 9h2" />
          <path d="M17.8 11.8L19 13" />
          <path d="M15 9h0" />
          <path d="M17.8 6.2L19 5" />
          <path d="M3 21l9-9" />
          <path d="M12.2 6.2L11 5" />
        </svg>
      ),
    },
    {
      label: 'My Library',
      view: 'library',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
      badge: libraryCount,
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[304px] min-h-screen bg-white border-r border-gray-100 fixed left-0 top-0 z-30">
      {/* Logo */}
      <div className="px-7 pt-8 pb-4">
        <button
          onClick={() => setView('home')}
          className="focus:outline-none"
          aria-label="VedaAI Home"
        >
          <VedaAILogo />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-4 pt-4 space-y-1">
        {/* Featured "Create Assignment" CTA */}
        <div className="px-3 mb-4">
          <CreateAssignmentButton onClick={handleCreateAssignment} />
        </div>

        {navLinks.map((item, idx) => {
          const active = currentView === item.view;
          return (
            <button
              key={`${item.label}-${idx}`}
              onClick={() => setView(item.view)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                active
                  ? 'bg-gray-100 font-semibold text-gray-900'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <span className={active ? 'text-gray-900' : 'text-gray-400'}>
                {item.icon}
              </span>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge !== undefined && (
                <span className="bg-[#FF5623] text-white text-xs font-semibold rounded-full px-2.5 py-0.5 min-w-[28px] text-center shadow-sm">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-4 pb-6 mt-auto">
       
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          <span>Settings</span>
        </button>

        {/* User / School card */}
        <div className="mt-3 p-3 rounded-2xl border border-gray-100 bg-gray-50/60 flex items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-red-500 flex items-center justify-center shadow-inner flex-shrink-0 overflow-hidden">
            <span className="text-white font-bold text-base">D</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              Delhi Public School
            </p>
            <p className="text-xs text-gray-500 truncate">Bokaro Steel City</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
