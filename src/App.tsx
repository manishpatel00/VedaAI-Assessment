import { useAssignmentStore } from './store/useAssignmentStore';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import MobileHeader from './components/MobileHeader';
import AssignmentsView from './views/AssignmentsView';
import CreateAssignmentView from './views/CreateAssignmentView';
import ViewPaperView from './views/ViewPaperView';
import HomeView from './views/HomeView';
import AIToolkitView from './views/AIToolkitView';

function LibraryView() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center pb-24 lg:pb-8 bg-[#fafafa]">
      <div className="text-center px-6 max-w-md">
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">My Library</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Your saved resources, templates, and reusable question banks will
          appear here. Build your library over time.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const { currentView } = useAssignmentStore();

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView />;
      case 'assignments': return <AssignmentsView />;
      case 'create-assignment': return <CreateAssignmentView />;
      case 'view-paper': return <ViewPaperView />;
      case 'ai-toolkit': return <AIToolkitView />;
      case 'library': return <LibraryView />;
      default: return <AssignmentsView />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop Sidebar (fixed) */}
      <Sidebar />

      {/* Main Content — offset for fixed sidebar on lg+ */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden lg:ml-[304px]">
        {/* Mobile header */}
        <MobileHeader />

        {/* Desktop header */}
        <div className="hidden lg:block">
          <Header />
        </div>

        {/* Page Content */}
        <main className="flex flex-col flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}
