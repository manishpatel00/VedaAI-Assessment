import { useAssignmentStore } from '../store/useAssignmentStore';

export default function Header() {
  const { currentView, setView } = useAssignmentStore();

  const getTitle = () => {
    switch (currentView) {
      case 'create-assignment': return 'Assignment';
      case 'view-paper': return 'Create New';
      case 'assignments': return 'Assignment';
      default: return 'Assignment';
    }
  };

  const handleBack = () => {
    switch (currentView) {
      case 'create-assignment': setView('assignments'); break;
      case 'view-paper': setView('assignments'); break;
      default: setView('assignments');
    }
  };

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <div className="flex items-center gap-2 text-gray-500">
          {currentView === 'view-paper' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          )}
          {currentView === 'assignments' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          )}
          <span className="text-sm font-medium">{getTitle()}</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:text-gray-800 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            JD
          </div>
          <span className="hidden lg:block text-sm font-medium text-gray-800">John Doe</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden lg:block text-gray-400">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
}
