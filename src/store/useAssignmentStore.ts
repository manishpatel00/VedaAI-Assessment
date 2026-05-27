import { create } from 'zustand';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface QuestionType {
  id: string;
  type: string;
  count: number;
  marks: number;
}

export interface AssignmentFormData {
  title: string;
  subject: string;
  grade: string;
  dueDate: string;
  instructions: string;
  questionTypes: QuestionType[];
  uploadedFile: File | null;
  uploadedFileName: string;
  totalTime: number;
  schoolName: string;
  difficulty: Difficulty;
  topic: string;
}

export interface Question {
  id: string;
  text: string;
  difficulty: Difficulty;
  marks: number;
  type: string;
}

export interface Section {
  id: string;
  title: string; // e.g. "Section A"
  subtitle: string; // e.g. "Short Answer Questions"
  instruction: string;
  questions: Question[];
  totalMarks: number;
}

export interface GeneratedPaper {
  id: string;
  schoolName: string;
  subject: string;
  grade: string;
  timeAllowed: number;
  maximumMarks: number;
  generalInstructions: string;
  sections: Section[];
  createdAt: string;
  aiMessage: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  grade: string;
  assignedOn: string;
  dueDate: string;
  status: 'pending' | 'generating' | 'completed' | 'failed';
  generatedPaper?: GeneratedPaper;
  formData: AssignmentFormData;
}

export type AppView =
  | 'home'
  | 'assignments'
  | 'create-assignment'
  | 'view-paper'
  | 'ai-toolkit'
  | 'library';

interface AssignmentState {
  currentView: AppView;
  assignments: Assignment[];
  selectedAssignment: Assignment | null;
  isGenerating: boolean;
  generationProgress: number;
  generationStatus: string;
  formData: AssignmentFormData;
  wsConnected: boolean;
  searchQuery: string;

  // Actions
  setView: (view: AppView) => void;
  setFormData: (data: Partial<AssignmentFormData>) => void;
  addQuestionType: () => void;
  removeQuestionType: (id: string) => void;
  updateQuestionType: (id: string, updates: Partial<QuestionType>) => void;
  createAssignment: () => Promise<void>;
  selectAssignment: (assignment: Assignment) => void;
  deleteAssignment: (id: string) => void;
  regeneratePaper: () => Promise<void>;
  setSearchQuery: (q: string) => void;
  resetForm: () => void;
}

const QUESTION_TYPE_OPTIONS = [
  'Multiple Choice Questions',
  'Short Questions',
  'Long Questions',
  'True/False',
  'Fill in the Blanks',
  'Match the Following',
  'Case Study',
  'Assertion & Reason',
];

const defaultFormData: AssignmentFormData = {
  title: '',
  subject: '',
  grade: '',
  dueDate: '',
  instructions: '',
  questionTypes: [
    { id: '1', type: 'Multiple Choice Questions', count: 4, marks: 1 },
    { id: '2', type: 'Short Questions', count: 3, marks: 2 },
  ],
  uploadedFile: null,
  uploadedFileName: '',
  totalTime: 45,
  schoolName: 'Delhi Public School, Sector-4, Bokaro',
  difficulty: 'medium',
  topic: '',
};

// Simulated AI generation
function generateQuestionPaper(formData: AssignmentFormData): GeneratedPaper {
  const subject = formData.subject || 'Science';
  const grade = formData.grade || '8th';
  const topic = formData.topic || subject;

  const questionBanks: Record<string, string[]> = {
    'Multiple Choice Questions': [
      `Which of the following best describes the process of ${topic}?`,
      `What is the primary function of ${topic} in the context of ${subject}?`,
      `Which scientist is credited with the discovery of principles related to ${topic}?`,
      `The unit of measurement used for ${topic} is:`,
      `What happens when ${topic} is applied at higher temperatures?`,
      `Which diagram best represents the concept of ${topic}?`,
      `The formula for calculating ${topic} efficiency is:`,
      `Which of the following is NOT a characteristic of ${topic}?`,
    ],
    'Short Questions': [
      `Define ${topic} and explain its significance in ${subject}.`,
      `Explain with an example how ${topic} affects everyday life.`,
      `What are the two main factors that influence ${topic}?`,
      `Describe the relationship between ${topic} and energy conservation.`,
      `How does ${topic} differ from related phenomena in ${subject}?`,
      `State and explain the law governing ${topic}.`,
    ],
    'Long Questions': [
      `Describe in detail the process of ${topic}. Include a labelled diagram and explain each step with examples from real-world applications.`,
      `Compare and contrast the different types of ${topic} observed in ${subject}. How do they affect the outcome in practical scenarios?`,
      `Explain the historical development of our understanding of ${topic}. How have these discoveries impacted modern ${subject}?`,
    ],
    'True/False': [
      `${topic} is a reversible process. (True/False)`,
      `The speed of ${topic} is constant under all conditions. (True/False)`,
      `${topic} was first discovered in the 19th century. (True/False)`,
      `Energy is always conserved during ${topic}. (True/False)`,
    ],
    'Fill in the Blanks': [
      `The process of ${topic} requires ________ as an essential component.`,
      `When ${topic} occurs, the temperature ________ (increases/decreases).`,
      `The SI unit of ${topic} is ________.`,
      `${topic} was discovered by ________.`,
    ],
    'Match the Following': [
      `Match the following terms related to ${topic} with their correct definitions.`,
    ],
    'Case Study': [
      `Read the following passage about a real-world application of ${topic} and answer the questions that follow:\n\n"In a recent experiment, scientists observed that ${topic} played a crucial role in determining the outcome. The results showed a significant correlation between the input variables and the final observations..."\n\na) What did scientists observe about ${topic}?\nb) How did the input variables affect the outcome?\nc) Suggest one practical application based on these findings.`,
    ],
    'Assertion & Reason': [
      `Assertion (A): ${topic} is an important concept in ${subject}.\nReason (R): It forms the basis of many practical applications used in daily life.\n\nChoose the correct answer:\n(a) Both A and R are true, and R is the correct explanation of A\n(b) Both A and R are true, but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true`,
    ],
  };

  const getDifficultyForIndex = (index: number, total: number): Difficulty => {
    const ratio = index / total;
    if (ratio < 0.4) return 'easy';
    if (ratio < 0.75) return 'medium';
    return 'hard';
  };

  let sectionIndex = 0;
  const sectionLetters = ['A', 'B', 'C', 'D', 'E'];

  const sections: Section[] = formData.questionTypes.map((qt) => {
    const letter = sectionLetters[sectionIndex] || String.fromCharCode(65 + sectionIndex);
    sectionIndex++;

    const bank = questionBanks[qt.type] || questionBanks['Short Questions'];
    const questions: Question[] = [];

    for (let i = 0; i < qt.count; i++) {
      const qText = bank[i % bank.length];
      questions.push({
        id: `q-${sectionIndex}-${i}`,
        text: qText,
        difficulty: getDifficultyForIndex(i, qt.count),
        marks: qt.marks,
        type: qt.type,
      });
    }

    const totalMarks = qt.count * qt.marks;
    const instruction =
      qt.type === 'Multiple Choice Questions'
        ? `Attempt all questions. Each question carries ${qt.marks} mark${qt.marks > 1 ? 's' : ''}.`
        : qt.type === 'Long Questions'
          ? `Attempt any ${Math.ceil(qt.count / 2)} out of ${qt.count} questions. Each question carries ${qt.marks} marks.`
          : `Attempt all questions. Each question carries ${qt.marks} mark${qt.marks > 1 ? 's' : ''}.`;

    return {
      id: `section-${letter}`,
      title: `Section ${letter}`,
      subtitle: qt.type,
      instruction,
      questions,
      totalMarks,
    };
  });

  const totalMarks = sections.reduce((sum, s) => sum + s.totalMarks, 0);

  return {
    id: `paper-${Date.now()}`,
    schoolName: formData.schoolName,
    subject: formData.subject || subject,
    grade: formData.grade || grade,
    timeAllowed: formData.totalTime,
    maximumMarks: totalMarks,
    generalInstructions:
      formData.instructions ||
      'All questions are compulsory unless stated otherwise.',
    sections,
    createdAt: new Date().toISOString(),
    aiMessage: `Certainly! Here are customized Question Papers for your CBSE Grade ${formData.grade || '8'} ${formData.subject || 'Science'} classes on the NCERT chapters${formData.topic ? ` covering ${formData.topic}` : ''}:`,
  };
}

const sampleAssignments: Assignment[] = [
  {
    id: 'sample-1',
    title: 'Quiz on Electricity',
    subject: 'Science',
    grade: '8th',
    assignedOn: '20-06-2025',
    dueDate: '21-06-2025',
    status: 'completed',
    formData: {
      ...defaultFormData,
      title: 'Quiz on Electricity',
      subject: 'Science',
      grade: '8th',
      topic: 'Electricity',
      dueDate: '2025-06-21',
    },
    generatedPaper: generateQuestionPaper({
      ...defaultFormData,
      title: 'Quiz on Electricity',
      subject: 'Science',
      grade: '8th',
      topic: 'Electricity',
      dueDate: '2025-06-21',
    }),
  },
  {
    id: 'sample-2',
    title: 'Quiz on Electricity',
    subject: 'Science',
    grade: '8th',
    assignedOn: '20-06-2025',
    dueDate: '21-06-2025',
    status: 'completed',
    formData: {
      ...defaultFormData,
      title: 'Quiz on Electricity',
      subject: 'Science',
      grade: '8th',
      topic: 'Electricity',
      dueDate: '2025-06-21',
    },
    generatedPaper: generateQuestionPaper({
      ...defaultFormData,
      title: 'Quiz on Electricity',
      subject: 'Science',
      grade: '8th',
      topic: 'Electricity',
      dueDate: '2025-06-21',
    }),
  },
  {
    id: 'sample-3',
    title: 'Quiz on Electricity',
    subject: 'Science',
    grade: '8th',
    assignedOn: '20-06-2025',
    dueDate: '21-06-2025',
    status: 'completed',
    formData: {
      ...defaultFormData,
      title: 'Quiz on Electricity',
      subject: 'Science',
      grade: '8th',
      topic: 'Electricity',
      dueDate: '2025-06-21',
    },
    generatedPaper: generateQuestionPaper({
      ...defaultFormData,
      title: 'Quiz on Electricity',
      subject: 'Science',
      grade: '8th',
      topic: 'Electricity',
      dueDate: '2025-06-21',
    }),
  },
];

// Simulate WebSocket
function simulateWebSocket(
  onProgress: (progress: number, status: string) => void,
  onComplete: () => void
) {
  const steps = [
    { progress: 15, status: 'Connecting to AI engine...' },
    { progress: 30, status: 'Analyzing assignment parameters...' },
    { progress: 50, status: 'Generating question structure...' },
    { progress: 65, status: 'Creating questions by difficulty...' },
    { progress: 80, status: 'Formatting sections...' },
    { progress: 90, status: 'Validating question paper...' },
    { progress: 100, status: 'Question paper ready!' },
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < steps.length) {
      onProgress(steps[i].progress, steps[i].status);
      i++;
    } else {
      clearInterval(interval);
      onComplete();
    }
  }, 600);
}

export const useAssignmentStore = create<AssignmentState>((set, get) => ({
  currentView: 'assignments',
  assignments: sampleAssignments,
  selectedAssignment: null,
  isGenerating: false,
  generationProgress: 0,
  generationStatus: '',
  formData: { ...defaultFormData },
  wsConnected: false,
  searchQuery: '',

  setView: (view) => set({ currentView: view }),

  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),

  addQuestionType: () =>
    set((state) => ({
      formData: {
        ...state.formData,
        questionTypes: [
          ...state.formData.questionTypes,
          {
            id: Date.now().toString(),
            type: QUESTION_TYPE_OPTIONS[
              state.formData.questionTypes.length % QUESTION_TYPE_OPTIONS.length
            ],
            count: 3,
            marks: 2,
          },
        ],
      },
    })),

  removeQuestionType: (id) =>
    set((state) => ({
      formData: {
        ...state.formData,
        questionTypes: state.formData.questionTypes.filter((qt) => qt.id !== id),
      },
    })),

  updateQuestionType: (id, updates) =>
    set((state) => ({
      formData: {
        ...state.formData,
        questionTypes: state.formData.questionTypes.map((qt) =>
          qt.id === id ? { ...qt, ...updates } : qt
        ),
      },
    })),

  createAssignment: async () => {
    const { formData } = get();

    const newAssignment: Assignment = {
      id: `assignment-${Date.now()}`,
      title: formData.title || `${formData.subject} Assessment`,
      subject: formData.subject,
      grade: formData.grade,
      assignedOn: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
      dueDate: formData.dueDate
        ? new Date(formData.dueDate).toLocaleDateString('en-GB').replace(/\//g, '-')
        : '',
      status: 'generating',
      formData: { ...formData },
    };

    set((state) => ({
      assignments: [newAssignment, ...state.assignments],
      isGenerating: true,
      generationProgress: 0,
      generationStatus: 'Initializing...',
      wsConnected: true,
      currentView: 'view-paper',
      selectedAssignment: newAssignment,
    }));

    simulateWebSocket(
      (progress, status) => {
        set({ generationProgress: progress, generationStatus: status });
      },
      () => {
        const paper = generateQuestionPaper(formData);
        const completedAssignment: Assignment = {
          ...newAssignment,
          status: 'completed',
          generatedPaper: paper,
        };

        set((state) => ({
          assignments: state.assignments.map((a) =>
            a.id === newAssignment.id ? completedAssignment : a
          ),
          selectedAssignment: completedAssignment,
          isGenerating: false,
          wsConnected: false,
          generationProgress: 100,
          generationStatus: 'Complete!',
        }));
      }
    );
  },

  selectAssignment: (assignment) =>
    set({ selectedAssignment: assignment, currentView: 'view-paper' }),

  deleteAssignment: (id) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a.id !== id),
    })),

  regeneratePaper: async () => {
    const { selectedAssignment } = get();
    if (!selectedAssignment) return;

    set({
      isGenerating: true,
      generationProgress: 0,
      generationStatus: 'Regenerating...',
    });

    simulateWebSocket(
      (progress, status) => {
        set({ generationProgress: progress, generationStatus: status });
      },
      () => {
        const paper = generateQuestionPaper(selectedAssignment.formData);
        const updated: Assignment = {
          ...selectedAssignment,
          status: 'completed',
          generatedPaper: paper,
        };

        set((state) => ({
          assignments: state.assignments.map((a) =>
            a.id === selectedAssignment.id ? updated : a
          ),
          selectedAssignment: updated,
          isGenerating: false,
          generationProgress: 100,
          generationStatus: 'Complete!',
        }));
      }
    );
  },

  setSearchQuery: (q) => set({ searchQuery: q }),

  resetForm: () => set({ formData: { ...defaultFormData } }),
}));

export { QUESTION_TYPE_OPTIONS, generateQuestionPaper };
