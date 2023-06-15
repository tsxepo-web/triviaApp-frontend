import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss']
})
export class QuestionManagementComponent implements OnInit {
  questions: Question[] = [];
  newQuestion: Question = {
    id: "",
    question: 'create a question',
    options: ['option1', 'option2', 'option3'],
    correctAnswer: 'option1',
    distractors: ['option2', 'option3']
  };
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
    .subscribe(questions => this.questions = questions);
  }
  add(): void {
    this.questionService.addQuestion(this.newQuestion)
      .subscribe(question => { this.questions.push(question)});
  }
  delete(question: Question): void {
    this.questions = this.questions.filter(x => x !== question);
    this.questionService.deleteQuestion(question.id).subscribe();
  }
  edit(question: Question): void {
    this.newQuestion = { ...question };
  }
}
