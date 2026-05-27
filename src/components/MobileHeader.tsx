import { useAssignmentStore } from '../store/useAssignmentStore';

function FigmaHeader() {
  return (
    <header className="lg:hidden sticky top-0 z-20">
      <div className="mx-3 mt-2 rounded-2xl bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-3 py-3.5 h-14">
          {/* Logo Section */}
          <div className="flex items-center gap-2.5">
            {/* VedaAI Logo Icon */}
            <div className="w-7 h-7 rounded-[7px] bg-[#303030] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.709 12.1507C11.709 12.1507 12.2181 13.5101 12.6848 13.5952H6.78781C5.59981 13.5952 4.53951 12.9155 4.19981 11.6409L0.763505 1.44449C0.763505 1.44449 0.466605 0.212391 0 0H6.02431C7.21231 0.0425995 8.01831 0.467291 8.48501 2.03939L11.709 12.1507Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.709 12.1507C11.709 12.1507 12.2181 13.5101 12.6848 13.5952H6.78781C5.59981 13.5952 4.53951 12.9155 4.19981 11.6409L0.763505 1.44449C0.763505 1.44449 0.466605 0.212391 0 0H6.02431C7.21231 0.0425995 8.01831 0.467291 8.48501 2.03939L11.709 12.1507Z"
                  fill="url(#veda_grad)"
                  opacity="0.2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.93361 12.1509C7.93361 12.1509 7.42441 13.5103 6.95771 13.5954H12.8547C14.0427 13.5954 15.103 12.9157 15.4427 11.6411L18.8368 1.44499C18.8368 1.44499 19.1336 0.212891 19.6003 0.000488281H13.6182C12.4303 0.000488281 11.6668 0.425291 11.2001 1.99739L7.93361 12.1509Z"
                  fill="white"
                />
                <defs>
                  <linearGradient id="veda_grad" x1="6.3424" y1="-1.1557" x2="6.3424" y2="14.7936" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.33" stopColor="white" stopOpacity="0" />
                    <stop offset="0.76" stopColor="#0E1513" />
                    <stop offset="1" stopColor="#0E1513" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* VedaAI Text */}
            <span className="text-[#303030] text-[28px] font-bold tracking-[-0.06em] leading-[100%] align-middle" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              VedaAI
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <div className="relative w-9 h-9 rounded-full bg-[#F6F6F6] flex items-center justify-center">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path
                  d="M15 6C15 4.4087 14.368 2.8826 13.243 1.75736C12.117 0.632141 10.591 0 9 0C7.409 0 5.883 0.632141 4.757 1.75736C3.632 2.8826 3 4.4087 3 6C3 13 0 15 0 15H18C18 15 15 13 15 6Z"
                  stroke="#303030"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.73 19C10.554 19.3031 10.302 19.5547 9.998 19.7295C9.695 19.9044 9.35 19.9965 9 19.9965C8.65 19.9965 8.305 19.9044 8.002 19.7295C7.698 19.5547 7.446 19.3031 7.27 19"
                  stroke="#303030"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Orange notification dot */}
              <div className="absolute -top-0.5 -right-0.5 w-[8px] h-[8px] rounded-full bg-[#FF5623]" />
            </div>

            {/* Profile Avatar */}
            <div className="w-8 h-8 rounded-full bg-[#F6F6F6] overflow-hidden flex-shrink-0">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-600 via-orange-500 to-red-400 flex items-center justify-center text-white text-[10px] font-bold">
                JD
              </div>
            </div>

            {/* Hamburger Menu */}
            <button className="flex items-center justify-center w-6 h-6">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="#1D1B20" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function SubPageHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <header className="lg:hidden sticky top-0 z-20 bg-[#e8e8e8]">
      <div className="mx-3 mt-2 rounded-2xl bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-3 py-3.5 h-14">
          {/* Logo Section */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[7px] bg-[#303030] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.709 12.1507C11.709 12.1507 12.2181 13.5101 12.6848 13.5952H6.78781C5.59981 13.5952 4.53951 12.9155 4.19981 11.6409L0.763505 1.44449C0.763505 1.44449 0.466605 0.212391 0 0H6.02431C7.21231 0.0425995 8.01831 0.467291 8.48501 2.03939L11.709 12.1507Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.709 12.1507C11.709 12.1507 12.2181 13.5101 12.6848 13.5952H6.78781C5.59981 13.5952 4.53951 12.9155 4.19981 11.6409L0.763505 1.44449C0.763505 1.44449 0.466605 0.212391 0 0H6.02431C7.21231 0.0425995 8.01831 0.467291 8.48501 2.03939L11.709 12.1507Z" fill="url(#veda_grad2)" opacity="0.2" />
                <path fillRule="evenodd" clipRule="evenodd" d="M7.93361 12.1509C7.93361 12.1509 7.42441 13.5103 6.95771 13.5954H12.8547C14.0427 13.5954 15.103 12.9157 15.4427 11.6411L18.8368 1.44499C18.8368 1.44499 19.1336 0.212891 19.6003 0.000488281H13.6182C12.4303 0.000488281 11.6668 0.425291 11.2001 1.99739L7.93361 12.1509Z" fill="white" />
                <defs>
                  <linearGradient id="veda_grad2" x1="6.3424" y1="-1.1557" x2="6.3424" y2="14.7936" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" /><stop offset="0.33" stopColor="white" stopOpacity="0" /><stop offset="0.76" stopColor="#0E1513" /><stop offset="1" stopColor="#0E1513" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-[#303030] text-[28px] font-bold tracking-[-0.06em] leading-[100%] align-middle" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>VedaAI</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full bg-[#F6F6F6] flex items-center justify-center">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M15 6C15 4.4087 14.368 2.8826 13.243 1.75736C12.117 0.632141 10.591 0 9 0C7.409 0 5.883 0.632141 4.757 1.75736C3.632 2.8826 3 4.4087 3 6C3 13 0 15 0 15H18C18 15 15 13 15 6Z" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.73 19C10.554 19.3031 10.302 19.5547 9.998 19.7295C9.695 19.9044 9.35 19.9965 9 19.9965C8.65 19.9965 8.305 19.9044 8.002 19.7295C7.698 19.5547 7.446 19.3031 7.27 19" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div className="absolute -top-0.5 -right-0.5 w-[8px] h-[8px] rounded-full bg-[#FF5623]" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 via-orange-500 to-red-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">JD</div>
            <button className="flex items-center justify-center w-6 h-6">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="#1D1B20" /></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Sub-page title bar */}
      <div className="flex items-center gap-3 px-5 py-3">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <h1 className="text-base font-bold text-gray-900 flex-1 text-center pr-9">{title}</h1>
      </div>
    </header>
  );
}

export default function MobileHeader() {
  const { currentView, setView } = useAssignmentStore();
  const isSubPage = ['create-assignment', 'view-paper'].includes(currentView);

  const getSubPageTitle = () => {
    if (currentView === 'create-assignment') return 'Create Assignment';
    if (currentView === 'view-paper') return 'Question Paper';
    return '';
  };

  if (isSubPage) {
    return (
      <SubPageHeader
        title={getSubPageTitle()}
        onBack={() => setView('assignments')}
      />
    );
  }

  return <FigmaHeader />;
}
