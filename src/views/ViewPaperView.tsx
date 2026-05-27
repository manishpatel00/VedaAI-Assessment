import { useRef } from 'react';
import { useAssignmentStore, Difficulty, Section, Question } from '../store/useAssignmentStore';

const difficultyConfig: Record<Difficulty, { label: string; color: string; bg: string }> = {
  easy: { label: 'Easy', color: 'text-green-700', bg: 'bg-green-100' },
  medium: { label: 'Moderate', color: 'text-amber-700', bg: 'bg-amber-100' },
  hard: { label: 'Hard', color: 'text-red-700', bg: 'bg-red-100' },
};

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const cfg = difficultyConfig[difficulty];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${cfg.color} ${cfg.bg}`}>
      {cfg.label}
    </span>
  );
}

function GeneratingLoader({ progress, status }: { progress: number; status: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="w-20 h-20 mb-6 relative">
        <svg className="animate-spin w-20 h-20 text-orange-500" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#fed7aa" strokeWidth="2.5" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-2">Generating Question Paper</h2>
      <p className="text-sm text-gray-500 mb-8 text-center">{status}</p>

      {/* Progress bar */}
      <div className="w-full max-w-sm bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-400">{progress}% complete</p>

      {/* WebSocket indicator */}
      <div className="flex items-center gap-2 mt-6 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        WebSocket connected — receiving live updates
      </div>
    </div>
  );
}

export default function ViewPaperView() {
  const {
    selectedAssignment,
    isGenerating,
    generationProgress,
    generationStatus,
    regeneratePaper,
    setView,
  } = useAssignmentStore();

  const paperRef = useRef<HTMLDivElement>(null);

  const paper = selectedAssignment?.generatedPaper;

  const handleDownloadPDF = async () => {
    if (!paperRef.current) return;
    try {
      const { default: html2canvas } = await import('html2canvas');
      const { default: jsPDF } = await import('jspdf');

      const canvas = await html2canvas(paperRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = pdfWidth / imgWidth;
      const scaledHeight = imgHeight * ratio;

      let position = 0;
      let remainingHeight = scaledHeight;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
      remainingHeight -= pdfHeight;

      while (remainingHeight > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
        remainingHeight -= pdfHeight;
      }

      const fileName = `${selectedAssignment?.title || 'question-paper'}.pdf`
        .replace(/[^a-z0-9.]/gi, '-')
        .toLowerCase();
      pdf.save(fileName);
    } catch (err) {
      console.error('PDF generation failed:', err);
    }
  };

  if (isGenerating) {
    return <GeneratingLoader progress={generationProgress} status={generationStatus} />;
  }

  if (!paper) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
        <p className="text-gray-500 mb-4">No paper generated yet.</p>
        <button
          onClick={() => setView('assignments')}
          className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Back to Assignments
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-24 lg:pb-8">
      {/* AI Banner */}
      <div className="mx-4 lg:mx-6 mt-4 bg-gray-900 rounded-2xl p-5 lg:p-6 text-white">
        <p className="text-sm lg:text-base font-medium leading-relaxed mb-4">
          {paper.aiMessage}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors shadow-sm"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download as PDF
          </button>
          <button
            onClick={regeneratePaper}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 text-white font-semibold rounded-full text-sm hover:bg-gray-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Regenerate
          </button>
        </div>
      </div>

      {/* Question Paper */}
      <div className="mx-4 lg:mx-6 mt-4 mb-4">
        <div ref={paperRef} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-8 lg:px-12 pt-8 pb-4 text-center border-b border-gray-200">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{paper.schoolName}</h1>
            <div className="text-base font-semibold text-gray-800 mt-2">Subject: {paper.subject}</div>
            <div className="text-base font-semibold text-gray-800">Class: {paper.grade}</div>
          </div>

          {/* Meta info */}
          <div className="px-8 lg:px-12 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-700 mb-3">
              <span className="font-medium">Time Allowed: {paper.timeAllowed} minutes</span>
              <span className="font-bold">Maximum Marks: {paper.maximumMarks}</span>
            </div>
            <p className="text-sm text-gray-700 mb-4">{paper.generalInstructions}</p>

            {/* Student Info */}
            <div className="space-y-2 text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <span className="font-medium">Name:</span>
                <div className="flex-1 border-b border-gray-400 h-5 max-w-[200px]"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Roll Number:</span>
                  <div className="border-b border-gray-400 h-5 w-[100px]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Class: {paper.grade} Section:</span>
                <div className="border-b border-gray-400 h-5 w-[80px]"></div>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="px-8 lg:px-12 py-6 space-y-8">
            {paper.sections.map((section: Section) => (
              <div key={section.id}>
                <div className="text-center mb-4">
                  <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="mb-3">
                  <h3 className="text-sm font-bold text-gray-800 mb-0.5">{section.subtitle}</h3>
                  <p className="text-xs italic text-gray-600">{section.instruction}</p>
                </div>

                {/* Questions */}
                <ol className="space-y-4">
                  {section.questions.map((question: Question, qIdx: number) => (
                    <li key={question.id} className="flex gap-3">
                      <span className="text-sm font-semibold text-gray-800 min-w-[24px] mt-0.5">
                        {qIdx + 1}.
                      </span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <p className="text-sm text-gray-800 leading-relaxed flex-1 whitespace-pre-line">
                            {question.text}
                          </p>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <DifficultyBadge difficulty={question.difficulty} />
                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                              [{question.marks} Mark{question.marks > 1 ? 's' : ''}]
                            </span>
                          </div>
                        </div>

                        {/* MCQ Options placeholder */}
                        {question.type === 'Multiple Choice Questions' && (
                          <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-gray-600">
                            {['(a) Option A', '(b) Option B', '(c) Option C', '(d) Option D'].map((opt) => (
                              <span key={opt} className="flex items-center gap-1">{opt}</span>
                            ))}
                          </div>
                        )}
                        {question.type === 'True/False' && (
                          <div className="mt-2 flex gap-4 text-xs text-gray-600">
                            <span>(a) True</span>
                            <span>(b) False</span>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="text-right mt-3 text-xs font-semibold text-gray-500">
                  [{section.totalMarks} Marks]
                </div>
                <div className="border-b border-dashed border-gray-200 mt-4"></div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-8 lg:px-12 py-4 text-center border-t border-gray-200">
            <p className="text-xs text-gray-400">*** End of Question Paper ***</p>
            <p className="text-xs text-gray-400 mt-1">Generated by VedaAI • {new Date(paper.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
