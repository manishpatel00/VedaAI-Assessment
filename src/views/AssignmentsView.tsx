import { useState } from 'react';
import { useAssignmentStore, Assignment } from '../store/useAssignmentStore';

/* ─────────── Figma-exact Empty State SVG ─────────── */
function EmptyStateIllustration() {
  return (
    <svg
      className="w-48 h-48 mb-6"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Illustrations" clipPath="url(#clip0_19_312)">
        <g id="Illustration found">
          <path
            id="Background"
            d="M110 197.267C158.601 197.267 198 157.868 198 109.267C198 60.6656 158.601 21.2667 110 21.2667C61.3989 21.2667 22 60.6656 22 109.267C22 157.868 61.3989 197.267 110 197.267Z"
            fill="url(#paint0_linear_19_312)"
          />
          <g id="Page">
            <g id="Page_2" filter="url(#filter0_d_19_312)">
              <rect
                x="65.2667"
                y="46.608"
                width="91.3272"
                height="113.688"
                rx="11.7333"
                fill="white"
              />
            </g>
            <g id="Information">
              <rect
                id="Title"
                x="73.3334"
                y="61.2747"
                width="36.6667"
                height="7.18667"
                rx="3.59333"
                fill="#011625"
              />
              <rect
                id="Text"
                x="73.3334"
                y="81.6614"
                width="73.3333"
                height="7.18667"
                rx="3.59333"
                fill="#D5D5D5"
              />
              <rect
                id="Text_2"
                x="73.3334"
                y="102.048"
                width="73.3333"
                height="7.18667"
                rx="3.59333"
                fill="#D5D5D5"
              />
              <rect
                id="Text_3"
                x="73.3334"
                y="122.435"
                width="73.3333"
                height="7.18667"
                rx="3.59333"
                fill="#D5D5D5"
              />
              <rect
                id="Text_4"
                x="73.3334"
                y="142.821"
                width="73.3333"
                height="7.18667"
                rx="3.59333"
                fill="#D5D5D5"
              />
            </g>
          </g>
          <g id="Cloud">
            <g id="Cloud_2" filter="url(#filter1_d_19_312)">
              <path
                d="M211.31 34.0443H167.251C165.198 34.0443 163.533 35.7958 163.533 37.9565V59.7505C163.533 61.9112 165.198 63.6628 167.251 63.6628H211.31C213.363 63.6628 215.027 61.9112 215.027 59.7505V37.9565C215.027 35.7958 213.363 34.0443 211.31 34.0443Z"
                fill="white"
              />
            </g>
            <g id="Circle">
              <path
                id="Vector"
                d="M174.533 53.5333C176.963 53.5333 178.933 51.5634 178.933 49.1333C178.933 46.7033 176.963 44.7333 174.533 44.7333C172.103 44.7333 170.133 46.7033 170.133 49.1333C170.133 51.5634 172.103 53.5333 174.533 53.5333Z"
                fill="#CCC6D9"
              />
              <rect
                id="Rectangle 10"
                x="184.8"
                y="44.7333"
                width="23.4667"
                height="8.8"
                rx="4.4"
                fill="#D5D5D5"
              />
            </g>
          </g>
          <g id="Lens">
            <path
              id="Subtract"
              d="M135.747 73.7465C161.06 73.7465 181.581 94.2666 181.581 119.579C181.581 129.461 178.452 138.613 173.133 146.098L201.934 173.591L191.11 186.15L161.262 157.658C153.969 162.555 145.192 165.413 135.747 165.413C110.434 165.413 89.9137 144.892 89.9137 119.579C89.9139 94.2667 110.434 73.7466 135.747 73.7465ZM136.038 80.7767C114.608 80.7767 97.2342 98.1493 97.234 119.579C97.234 141.01 114.607 158.383 136.038 158.383C157.468 158.383 174.84 141.01 174.84 119.579C174.84 98.1495 157.468 80.777 136.038 80.7767Z"
              fill="#CCC6D9"
            />
            <foreignObject x="90.2" y="74.0667" width="91.6667" height="90.9333">
              <div
                style={{
                  backdropFilter: 'blur(2.93px)',
                  clipPath: 'url(#bgblur_1_19_312_clip_path)',
                  height: '100%',
                  width: '100%',
                }}
              ></div>
            </foreignObject>
            <path
              id="Vector_2"
              d="M136.033 159.133C158.106 159.133 176 141.404 176 119.533C176 97.6629 158.106 79.9333 136.033 79.9333C113.96 79.9333 96.0667 97.6629 96.0667 119.533C96.0667 141.404 113.96 159.133 136.033 159.133Z"
              fill="white"
              fillOpacity="0.3"
            />
            <path
              id="Close icon"
              d="M142.944 119.533L152.616 109.899C153.522 108.946 154.018 107.679 154 106.368C153.981 105.057 153.448 103.804 152.516 102.877C151.583 101.95 150.323 101.421 149.004 101.402C147.684 101.384 146.41 101.877 145.451 102.778L135.757 112.412L126.086 102.778C125.62 102.288 125.061 101.896 124.44 101.625C123.82 101.355 123.151 101.21 122.473 101.201C121.796 101.191 121.123 101.317 120.495 101.57C119.867 101.823 119.297 102.199 118.818 102.675C118.339 103.152 117.96 103.719 117.706 104.343C117.451 104.967 117.324 105.635 117.334 106.309C117.343 106.982 117.489 107.647 117.761 108.264C118.034 108.88 118.428 109.436 118.921 109.899L128.609 119.533L118.921 129.168C118.428 129.63 118.034 130.186 117.761 130.803C117.489 131.42 117.343 132.084 117.334 132.758C117.324 133.431 117.451 134.1 117.706 134.724C117.96 135.348 118.339 135.915 118.818 136.391C119.297 136.868 119.867 137.243 120.495 137.497C121.123 137.75 121.796 137.876 122.473 137.866C123.151 137.857 123.82 137.712 124.44 137.441C125.061 137.17 125.62 136.778 126.086 136.289L135.779 126.654L145.473 136.289C146.441 137.136 147.697 137.585 148.987 137.544C150.276 137.502 151.501 136.973 152.412 136.065C153.323 135.157 153.851 133.938 153.889 132.657C153.926 131.375 153.471 130.127 152.616 129.168L142.944 119.533Z"
              fill="#FF4040"
            />
            <path
              id="Vector_3"
              d="M191.108 186.151L201.932 173.593L203.562 175.149C205.144 176.659 206.091 178.769 206.195 181.013C206.299 183.258 205.551 185.455 204.117 187.119C202.682 188.784 200.677 189.781 198.544 189.89C196.411 190 194.324 189.213 192.742 187.703L191.112 186.147L191.108 186.151Z"
              fill="#E1DCEB"
            />
          </g>
          <g id="Doodles">
            <path
              id="Vector_4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.2972 66.8592C41.2834 65.8135 41.1522 64.7587 40.8898 63.6967C39.9697 59.9699 35.8647 57.5772 31.4954 57.0147C27.128 56.4522 22.5861 57.7323 20.8357 60.9741C19.8344 62.8276 19.6963 64.4251 20.1055 65.772C20.5129 67.1117 21.4795 68.2223 22.7915 69.0878C26.4495 71.4984 32.8558 71.9906 35.7784 70.9827C37.13 70.5158 38.4506 69.9533 39.7367 69.3096C39.0013 73.5232 36.2617 77.5151 32.6054 81.1122C24.6593 88.9301 12.3285 94.8638 5.61331 97.0455C5.25252 97.1627 5.05226 97.563 5.16446 97.9398C5.27667 98.3166 5.6599 98.5276 6.02069 98.4104C12.8688 96.1855 25.4396 90.1255 33.5428 82.1525C37.729 78.0344 40.712 73.3988 41.2213 68.5252C50.6847 63.2442 58.4565 53.6629 65.1009 45.5998C65.3478 45.3023 65.315 44.8497 65.0284 44.5919C64.7419 44.3358 64.3102 44.3683 64.0634 44.6676C57.6899 52.4008 50.2929 61.5998 41.2972 66.8592ZM39.9214 67.6255C39.9732 66.45 39.8627 65.2563 39.564 64.0519C38.7682 60.8263 35.1102 58.9187 31.328 58.4319C29.0096 58.1344 26.6256 58.3796 24.756 59.2523C23.5805 59.8004 22.612 60.5955 22.0285 61.6773C21.262 63.0963 21.0963 64.3098 21.4105 65.3393C21.7246 66.376 22.505 67.209 23.5218 67.8779C26.8552 70.0758 32.6883 70.5428 35.3485 69.6251C36.9177 69.0842 38.4403 68.4098 39.9214 67.6255Z"
              fill="#011625"
            />
            <circle cx="209" cy="134.933" r="4.4" fill="#417BA4" />
            <path
              id="Vector_5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.8152 165.289C43.6004 164.995 44.4267 164.603 45.0639 164.037C45.8207 163.364 46.1285 162.497 46.3352 161.585C46.6006 160.412 46.7066 159.164 47.0283 157.99C47.1475 157.554 47.3768 157.389 47.4751 157.316C47.7238 157.131 47.9751 157.082 48.2116 157.1C48.4919 157.122 48.8768 157.233 49.13 157.728C49.1661 157.798 49.213 157.906 49.2446 158.054C49.2676 158.162 49.2825 158.501 49.3069 158.641C49.3678 158.984 49.4188 159.328 49.4666 159.674C49.6259 160.825 49.7175 161.802 50.2207 162.859C50.9035 164.295 51.5877 165.173 52.5155 165.562C53.4127 165.938 54.4853 165.867 55.8559 165.572C55.9863 165.539 56.1154 165.51 56.2431 165.487C56.8473 165.376 57.425 165.793 57.5437 166.427C57.6624 167.06 57.2783 167.677 56.6795 167.816C56.5545 167.845 56.4313 167.873 56.3094 167.898C54.4574 168.38 52.3133 170.102 51.0673 171.61C50.6833 172.075 50.121 173.375 49.5474 174.204C49.1241 174.816 48.6485 175.219 48.2491 175.362C47.9815 175.458 47.7558 175.443 47.5694 175.395C47.2987 175.324 47.0739 175.17 46.9016 174.924C46.8077 174.79 46.7206 174.61 46.6791 174.38C46.6592 174.269 46.657 173.988 46.6574 173.861C46.5405 173.438 46.3975 173.025 46.2932 172.598C46.0446 171.579 45.5567 170.934 44.9773 170.082C44.4353 169.285 43.8531 168.784 42.9998 168.384C42.8888 168.355 41.993 168.124 41.6766 167.992C41.2145 167.798 40.9943 167.472 40.9144 167.297C40.7785 167 40.7646 166.74 40.7916 166.523C40.8318 166.204 40.9681 165.93 41.21 165.709C41.3598 165.572 41.5837 165.439 41.8833 165.374C42.1148 165.323 42.729 165.293 42.8152 165.289ZM48.0704 163.629C48.1119 163.726 48.1561 163.824 48.203 163.923C49.2031 166.025 50.3214 167.198 51.6806 167.768L51.7262 167.786C50.8169 168.497 49.9937 169.291 49.3646 170.052C49.1056 170.366 48.7626 171.017 48.3921 171.684C48.0555 170.533 47.5049 169.719 46.8126 168.7C46.2837 167.923 45.7296 167.337 45.0486 166.861C45.577 166.575 46.0811 166.241 46.5202 165.85C47.2513 165.2 47.7346 164.447 48.0704 163.629Z"
              fill="#417BA4"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_19_312"
          x="43.2667"
          y="39.2747"
          width="135.327"
          height="157.688"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="14.6667" />
          <feGaussianBlur stdDeviation="11" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0.19 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_312"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_312"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_19_312"
          x="158.4"
          y="27.4443"
          width="70.5606"
          height="48.6852"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4.4" dy="2.93333" />
          <feGaussianBlur stdDeviation="4.76667" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.104618 0 0 0 0 0.465612 0 0 0 0 0.545833 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_312"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_312"
            result="shape"
          />
        </filter>
        <clipPath id="bgblur_1_19_312_clip_path" transform="translate(-90.2 -74.0667)">
          <path d="M136.033 159.133C158.106 159.133 176 141.404 176 119.533C176 97.6629 158.106 79.9333 136.033 79.9333C113.96 79.9333 96.0667 97.6629 96.0667 119.533C96.0667 141.404 113.96 159.133 136.033 159.133Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_19_312"
          x1="109.322"
          y1="-7.3883"
          x2="111.124"
          y2="301.654"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F2F2" />
          <stop offset="1" stopColor="#EFEFEF" />
        </linearGradient>
        <clipPath id="clip0_19_312">
          <rect width="220" height="220" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ─────────── Empty State (Figma exact) ─────────── */
function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center flex-1">
      <EmptyStateIllustration />

      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        No assignments yet
      </h2>
      <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-8">
        Create your first assignment to start collecting and grading student
        submissions. You can set up rubrics, define marking criteria, and let AI
        assist with grading.
      </p>

      <button
        onClick={onCreate}
        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <span>Create Your First Assignment</span>
      </button>
    </div>
  );
}

/* ─────────── Assignment Card ─────────── */
function AssignmentCard({
  assignment,
  onView,
  onDelete,
}: {
  assignment: Assignment;
  onView: (a: Assignment) => void;
  onDelete: (id: string) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 relative flex flex-col justify-between w-full lg:max-w-[542px] h-[162px]">
      <div className="flex items-start justify-between">
        <h3
          className="text-[24px] font-bold text-gray-900 tracking-[-0.06em] leading-[120%] align-middle cursor-pointer transition-colors hover:text-orange-600"
          onClick={() => onView(assignment)}
        >
          {assignment.title}
        </h3>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="5" r="1" fill="currentColor" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="19" r="1" fill="currentColor" />
            </svg>
          </button>
          {showMenu && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
              <div className="absolute right-0 top-8 z-20 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[170px]">
                <button
                  onClick={() => {
                    onView(assignment);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  View Assignment
                </button>
                <button
                  onClick={() => {
                    onDelete(assignment.id);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Status badge */}
      {assignment.status === 'generating' && (
        <span className="inline-flex items-center gap-1.5 text-xs bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full font-medium mb-3">
          <svg
            width="10"
            height="10"
            className="animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          Generating...
        </span>
      )}

      <div className="flex items-center gap-3 lg:gap-6 text-sm mt-1 flex-wrap">
        <span>
          <span className="font-semibold text-gray-900">Assigned on</span>
          <span className="text-gray-500"> : {assignment.assignedOn}</span>
        </span>
        {assignment.dueDate && (
          <span>
            <span className="font-semibold text-gray-900">Due</span>
            <span className="text-gray-500"> : {assignment.dueDate}</span>
          </span>
        )}
      </div>
    </div>
  );
}

/* ─────────── Main Assignments View ─────────── */
export default function AssignmentsView() {
  const {
    assignments,
    selectAssignment,
    deleteAssignment,
    setView,
    resetForm,
    searchQuery,
    setSearchQuery,
  } = useAssignmentStore();

  const handleCreate = () => {
    resetForm();
    setView('create-assignment');
  };

  const filtered = assignments.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Mobile sub-header: back arrow + title — Figma exact */}
      <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-[#e8e8e8]">
        <button
          onClick={() => setView('home')}
          className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-sm flex-shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <h1 className="text-base font-bold text-gray-900 flex-1 text-center pr-9">Assignments</h1>
      </div>

      {/* Desktop page header — matches Figma */}
      <div className="hidden lg:block px-6 py-5 border-b border-gray-100 bg-gray-50/80">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-300" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
            <p className="text-sm text-gray-500">
              Manage and create assignments for your classes.
            </p>
          </div>
        </div>
      </div>

      {assignments.length === 0 ? (
        <EmptyState onCreate={handleCreate} />
      ) : (
        <div className="flex-1 overflow-y-auto">
          {/* Filter + Search bar — Figma exact */}
          <div className="px-4 lg:px-6 py-3 lg:py-4 flex items-center gap-3">
            {/* Filter button */}
            <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-800 transition-colors flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              <span>Filter</span>
            </button>
            <div className="flex items-center gap-3 w-full">
              <div className="flex items-center gap-3 border border-gray-200 rounded-[21.5px] px-4 py-3 h-16 w-full bg-white">
                <button className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </button>
                <div className="flex items-center gap-2 flex-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-sm bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Assignment Grid — single col mobile, 2-col desktop */}
          <div className="px-4 lg:px-6 pb-32 lg:pb-8">
            {filtered.length === 0 ? (
              <p className="text-center text-gray-400 py-12">
                No assignments match your search.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                {filtered.map((assignment) => (
                  <AssignmentCard
                    key={assignment.id}
                    assignment={assignment}
                    onView={selectAssignment}
                    onDelete={deleteAssignment}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAB — mobile floating action button (Figma: white circle, orange +) */}
      {assignments.length > 0 && (
        <button
          onClick={handleCreate}
          className="fixed bottom-[110px] right-5 lg:hidden w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-50 transition-colors z-20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5623" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      )}

      {/* Sticky bottom create button — Desktop Figma style */}
      {assignments.length > 0 && (
        <div className="hidden lg:flex fixed bottom-0 left-[304px] right-0 p-6 justify-center bg-linear-to-t from-gray-50 via-gray-50/95 to-transparent pointer-events-none">
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-xl pointer-events-auto"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Create Assignment</span>
          </button>
        </div>
      )}
    </div>
  );
}
