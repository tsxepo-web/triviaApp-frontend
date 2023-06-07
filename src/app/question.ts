export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    distractors: string[];
}