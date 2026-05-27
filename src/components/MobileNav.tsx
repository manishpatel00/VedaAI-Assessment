import { useAssignmentStore, AppView } from '../store/useAssignmentStore';

/* ──────────────────────────────────────────────
   Figma-exact icons (filled style from SVG)
   ────────────────────────────────────────────── */

function HomeIcon({ active }: { active: boolean }) {
  const fill = active ? '#ffffff' : 'rgba(255,255,255,0.25)';
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      {/* Top-left */}
      <rect x="0" y="0" width="8.5" height="8.5" rx="2.7" fill={fill} />
      {/* Top-right */}
      <rect x="9.5" y="0" width="8.5" height="8.5" rx="2.7" fill={fill} />
      {/* Bottom-left */}
      <rect x="0" y="9.5" width="8.5" height="8.5" rx="2.7" fill={fill} />
      {/* Bottom-right */}
      <rect x="9.5" y="9.5" width="8.5" height="8.5" rx="2.7" fill={fill} />
    </svg>
  );
}

function CalendarIcon({ active }: { active: boolean }) {
  const fill = active ? '#ffffff' : 'rgba(255,255,255,0.25)';
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0.166626C5.46 0.166626 5.83333 0.539721 5.83333 1H10.8333C10.8333 0.539721 11.2065 0.166626 11.6667 0.166626C12.1269 0.166626 12.5 0.539721 12.5 1C14.8012 1 16.6667 2.86547 16.6667 5.16663V12.6666C16.6667 14.9678 14.8012 16.8333 12.5 16.8333H4.16667C1.86548 16.8333 0 14.9678 0 12.6666V5.16663C0 2.86547 1.86548 1 4.16667 1C4.16667 0.539721 4.53976 0.166626 5 0.166626ZM3.33333 6.83329C3.33333 6.37305 3.70643 6 4.16667 6H12.5C12.9602 6 13.3333 6.37305 13.3333 6.83329C13.3333 7.29353 12.9602 7.66663 12.5 7.66663H4.16667C3.70643 7.66663 3.33333 7.29353 3.33333 6.83329ZM10.8333 12.6666C10.8333 12.2064 11.2065 11.8333 11.6667 11.8333H12.5C12.9602 11.8333 13.3333 12.2064 13.3333 12.6666C13.3333 13.1269 12.9602 13.5 12.5 13.5H11.6667C11.2065 13.5 10.8333 13.1269 10.8333 12.6666Z"
        fill={fill}
      />
    </svg>
  );
}

function LibraryIcon({ active }: { active: boolean }) {
  const fill = active ? '#ffffff' : 'rgba(255,255,255,0.25)';
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66667 0.416626C6.66667 0.186515 6.47971 0 6.25 0H3.33333C1.4924 0 0 1.49238 0 3.33329V13.3333C0 15.1742 1.4924 16.6666 3.33333 16.6666H10C11.8409 16.6666 13.3333 15.1742 13.3333 13.3333V7.08329C13.3333 6.85318 13.1465 6.66663 12.9167 6.66663H10.8333C8.53215 6.66663 6.66667 4.80114 6.66667 2.49996V0.416626ZM12.6822 4.99996C12.9594 4.99996 13.1583 4.73248 13.0263 4.48944C12.9133 4.28319 12.7709 4.09199 12.6014 3.92256L9.41121 0.732221C9.24178 0.5627 9.05057 0.420304 8.84432 0.307283C8.60127 0.175263 8.33333 0.374044 8.33333 0.651133V2.49996C8.33333 3.88065 9.45264 4.99996 10.8333 4.99996H12.6822ZM6.66667 7.49996C7.12691 7.49996 7.5 7.87305 7.5 8.33329V9.99996H9.16667C9.62691 9.99996 10 10.373 10 10.8333C10 11.2935 9.62691 11.6666 9.16667 11.6666H7.5V13.3333C7.5 13.7935 7.12691 14.1666 6.66667 14.1666C6.20643 14.1666 5.83333 13.7935 5.83333 13.3333V11.6666H4.16667C3.70643 11.6666 3.33333 11.2935 3.33333 10.8333C3.33333 10.373 3.70643 9.99996 4.16667 9.99996H5.83333V8.33329C5.83333 7.87305 6.20643 7.49996 6.66667 7.49996Z"
        fill={fill}
      />
    </svg>
  );
}

function SparklesIcon({ active }: { active: boolean }) {
  const fill = active ? '#ffffff' : 'rgba(255,255,255,0.25)';
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      {/* Big sparkle (bottom-left) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.638 9.138L6.184 4.5H7.132L8.678 9.138L13.316 10.684V11.633L8.678 13.179L7.132 17.816H6.184L4.638 13.179L0 11.633V10.684L4.638 9.138Z"
        fill={fill}
      />
      {/* Small sparkle (top-right) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.388 2.888L14.184 0.5H15.132L15.928 2.888L18.316 3.684V4.633L15.928 5.428L15.132 7.816H14.184L13.388 5.428L11 4.633V3.684L13.388 2.888Z"
        fill={fill}
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   Mobile Bottom Nav — Figma exact
   ────────────────────────────────────────────── */

interface NavItem {
  label: string;
  view: AppView;
  icon: (props: { active: boolean }) => React.ReactElement;
}

const items: NavItem[] = [
  { label: 'Home', view: 'home', icon: HomeIcon },
  { label: 'Assignments', view: 'assignments', icon: CalendarIcon },
  { label: 'Library', view: 'library', icon: LibraryIcon },
  { label: 'AI Toolkit', view: 'ai-toolkit', icon: SparklesIcon },
];

export default function MobileNav() {
  const { currentView, setView } = useAssignmentStore();

  // Treat sub-pages as "assignments" tab active
  const activeView: AppView =
    currentView === 'create-assignment' || currentView === 'view-paper'
      ? 'assignments'
      : currentView;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
      <div className="px-3 pb-4 pt-2 flex justify-center pointer-events-none">
        {/* Floating dark pill — matches Figma rect(rx=24) with double drop-shadow */}
        <div
          className="pointer-events-auto w-full max-w-md bg-[#181818] rounded-3xl px-4 py-3"
          style={{
            boxShadow:
              '0 32px 48px rgba(0,0,0,0.20), 0 16px 48px rgba(0,0,0,0.12)',
          }}
        >
          <div className="flex items-center justify-around">
            {items.map((item) => {
              const active = activeView === item.view;
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => setView(item.view)}
                  className="flex flex-col items-center gap-1.5 py-1 px-2 min-w-[60px] focus:outline-none"
                  aria-label={item.label}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon active={active} />
                  <span
                    className={`text-[11px] font-semibold tracking-tight transition-colors ${
                      active ? 'text-white' : 'text-white/25'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
