import { useState, useRef } from 'react';
import { useAssignmentStore, QUESTION_TYPE_OPTIONS } from '../store/useAssignmentStore';

const DIFFICULTY_OPTIONS = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Mixed (Easy + Medium)' },
  { value: 'hard', label: 'Advanced (All Difficulties)' },
];

const SUBJECT_OPTIONS = [
  'Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology',
  'English', 'Hindi', 'History', 'Geography', 'Social Science',
  'Computer Science', 'Economics', 'Political Science',
];

const GRADE_OPTIONS = [
  '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th',
];

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-1 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i < step ? 'bg-gray-800' : 'bg-gray-200'
          } ${i === 0 ? 'flex-[3]' : 'flex-1'}`}
        />
      ))}
    </div>
  );
}

export default function CreateAssignmentView() {
  const {
    formData,
    setFormData,
    addQuestionType,
    removeQuestionType,
    updateQuestionType,
    createAssignment,
    setView,
  } = useAssignmentStore();

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.grade) newErrors.grade = 'Grade is required';
    if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
    if (!formData.title) newErrors.title = 'Assignment title is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (formData.questionTypes.length === 0) {
      newErrors.questionTypes = 'Add at least one question type';
    }
    formData.questionTypes.forEach((qt, idx) => {
      if (qt.count <= 0) newErrors[`count-${idx}`] = 'Must be > 0';
      if (qt.marks <= 0) newErrors[`marks-${idx}`] = 'Must be > 0';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, 2));
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;
    await createAssignment();
  };

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setErrors((e) => ({ ...e, file: 'File too large. Max 10MB.' }));
      return;
    }
    setFormData({ uploadedFile: file, uploadedFileName: file.name });
    setErrors((e) => ({ ...e, file: '' }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-32 lg:pb-8">
      {/* Page header */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-300"></div>
          <h1 className="text-xl font-bold text-gray-900">Create Assignment</h1>
        </div>
        <p className="text-sm text-gray-500 ml-5">Set up a new assignment for your students</p>
      </div>

      <div className="flex-1 px-4 lg:px-8 py-6 max-w-3xl mx-auto w-full">
        <StepIndicator step={step} total={2} />

        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Assignment Details</h2>
            <p className="text-sm text-gray-500 mb-6">Basic information about your assignment</p>

            {/* File Upload — Figma exact */}
            <div
              className={`relative rounded-3xl mb-2 flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer ${
                isDragging ? 'bg-orange-50' : 'bg-white'
              }`}
              style={{
                padding: '40px 24px',
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'><rect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='${
                  isDragging ? '%23FF5623' : 'rgba(0,0,0,0.2)'
                }' stroke-width='1.75' stroke-dasharray='8 8'/></svg>")`,
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {/* White rounded square icon container */}
              <div
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-5"
                style={{
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                {/* Cloud upload icon — exact Figma path */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 16L12 12L16 16M12 12V21M20.39 18.39C21.365 17.8583 22.136 17.0169 22.58 15.9986C23.024 14.9804 23.116 13.8432 22.842 12.7667C22.568 11.6901 21.943 10.7355 21.067 10.0534C20.19 9.37137 19.111 9.00073 18 9H16.74C16.437 7.82919 15.873 6.74227 15.09 5.82102C14.307 4.89977 13.325 4.16783 12.218 3.68056C11.111 3.19328 9.909 2.96334 8.7 3.00786C7.492 3.05238 6.309 3.37031 5.241 3.93764C4.173 4.50498 3.248 5.30709 2.535 6.28358C1.821 7.26006 1.339 8.38554 1.123 9.5754C0.907 10.7652 0.964 11.9885 1.289 13.1532C1.614 14.318 2.199 15.3938 3 16.3"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {formData.uploadedFileName ? (
                <>
                  <p className="text-base font-bold text-[#303030] mb-1">
                    {formData.uploadedFileName}
                  </p>
                  <p className="text-xs text-green-600 mb-5">✓ File selected — click to change</p>
                </>
              ) : (
                <>
                  <p className="text-base font-bold text-[#303030] mb-1">
                    Choose a file or drag & drop it here
                  </p>
                  <p className="text-xs text-[#A9A9A9] mb-5">JPEG, PNG, upto 10MB</p>
                </>
              )}

              {/* Browse Files button — light gray pill */}
              <button
                type="button"
                className="px-8 py-3 bg-[#F6F6F6] hover:bg-gray-200 rounded-full text-sm font-semibold text-[#303030] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Browse Files
              </button>

              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf,.txt"
                onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
              />
            </div>
            <p className="text-sm text-[#A9A9A9] text-center mb-6 mt-3">
              Upload images of your preferred document/image
            </p>
            {errors.file && <p className="text-red-500 text-xs mb-4">{errors.file}</p>}

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Assignment Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Quiz on Electricity"
                value={formData.title}
                onChange={(e) => setFormData({ title: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors.title ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                }`}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            {/* Subject & Grade */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white ${
                    errors.subject ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                  }`}
                >
                  <option value="">Select Subject</option>
                  {SUBJECT_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Grade/Class <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ grade: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white ${
                    errors.grade ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                  }`}
                >
                  <option value="">Select Grade</option>
                  {GRADE_OPTIONS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
              </div>
            </div>

            {/* Topic */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Topic / Chapter</label>
              <input
                type="text"
                placeholder="e.g., Electricity, Photosynthesis, World War II"
                value={formData.topic}
                onChange={(e) => setFormData({ topic: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm outline-none transition-all"
              />
            </div>

            {/* Due Date */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Due Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.dueDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ dueDate: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.dueDate ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300'
                  }`}
                />
              </div>
              {errors.dueDate && <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>}
            </div>

            {/* Time Allowed */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Time Allowed (minutes)</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ totalTime: Math.max(15, formData.totalTime - 15) })}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/></svg>
                </button>
                <span className="text-base font-semibold text-gray-800 w-12 text-center">{formData.totalTime}</span>
                <button
                  type="button"
                  onClick={() => setFormData({ totalTime: Math.min(180, formData.totalTime + 15) })}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
                <span className="text-sm text-gray-500">minutes</span>
              </div>
            </div>

            {/* School Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">School Name</label>
              <input
                type="text"
                placeholder="e.g., Delhi Public School"
                value={formData.schoolName}
                onChange={(e) => setFormData({ schoolName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm outline-none transition-all"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Question Configuration</h2>
            <p className="text-sm text-gray-500 mb-6">Configure question types, counts, and marks</p>

            {/* Question Type Header */}
            <div className="grid grid-cols-12 gap-3 mb-3 px-1">
              <div className="col-span-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">Question Type</div>
              <div className="col-span-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">No. of Qs</div>
              <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">Marks</div>
              <div className="col-span-1"></div>
            </div>

            {errors.questionTypes && (
              <p className="text-red-500 text-xs mb-3">{errors.questionTypes}</p>
            )}

            <div className="space-y-3 mb-5">
              {formData.questionTypes.map((qt) => (
                <div key={qt.id} className="grid grid-cols-12 gap-3 items-center p-3 bg-gray-50 rounded-xl">
                  {/* Type selector */}
                  <div className="col-span-6">
                    <select
                      value={qt.type}
                      onChange={(e) => updateQuestionType(qt.id, { type: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all"
                    >
                      {QUESTION_TYPE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Count */}
                  <div className="col-span-3 flex items-center gap-1 justify-center">
                    <button
                      type="button"
                      onClick={() => updateQuestionType(qt.id, { count: Math.max(1, qt.count - 1) })}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-gray-800">{qt.count}</span>
                    <button
                      type="button"
                      onClick={() => updateQuestionType(qt.id, { count: Math.min(20, qt.count + 1) })}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                    >
                      +
                    </button>
                  </div>

                  {/* Marks */}
                  <div className="col-span-2 flex items-center gap-1 justify-center">
                    <button
                      type="button"
                      onClick={() => updateQuestionType(qt.id, { marks: Math.max(1, qt.marks - 1) })}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-semibold text-gray-800">{qt.marks}</span>
                    <button
                      type="button"
                      onClick={() => updateQuestionType(qt.id, { marks: Math.min(20, qt.marks + 1) })}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-xs"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <div className="col-span-1 flex justify-center">
                    <button
                      type="button"
                      onClick={() => removeQuestionType(qt.id)}
                      disabled={formData.questionTypes.length <= 1}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-30"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addQuestionType}
              disabled={formData.questionTypes.length >= 6}
              className="flex items-center gap-2 text-sm text-orange-600 font-semibold hover:text-orange-700 transition-colors disabled:opacity-40 mb-6"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Question Type
            </button>

            {/* Difficulty */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Difficulty Level</label>
              <div className="space-y-2">
                {DIFFICULTY_OPTIONS.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="radio"
                      name="difficulty"
                      value={opt.value}
                      checked={formData.difficulty === opt.value}
                      onChange={(e) => setFormData({ difficulty: e.target.value as any })}
                      className="w-4 h-4 text-orange-500"
                    />
                    <span className="text-sm text-gray-700 font-medium">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Instructions */}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">Additional Instructions</label>
              <textarea
                placeholder="e.g., All questions are compulsory. Use blue/black pen only."
                value={formData.instructions}
                onChange={(e) => setFormData({ instructions: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm outline-none transition-all resize-none"
              />
            </div>

            {/* Summary */}
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
              <h4 className="text-sm font-semibold text-orange-800 mb-2">Summary</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-orange-700">
                <span>Total Questions: <strong>{formData.questionTypes.reduce((s, q) => s + q.count, 0)}</strong></span>
                <span>Total Marks: <strong>{formData.questionTypes.reduce((s, q) => s + q.count * q.marks, 0)}</strong></span>
                <span>Sections: <strong>{formData.questionTypes.length}</strong></span>
                <span>Time: <strong>{formData.totalTime} min</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => step === 1 ? setView('assignments') : setStep(1)}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all shadow-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Previous
          </button>
          {step < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-md"
            >
              Next
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Generate Paper
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
