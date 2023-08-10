import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss']
})
export class QuestionManagementComponent implements OnInit {
  questions: Question[] = [];
  optionsAsString: string = '';
  distractorsAsString: string = '';

  constructor(
    private questionService: QuestionService,
    private sharedService: SharedServiceService) {}

  ngOnInit(): void {
  }
  
  add(): void {
    this.sharedService.newQuestion.options = JSON.parse(this.optionsAsString);
    this.sharedService.newQuestion.distractors = JSON.parse(this.distractorsAsString);

    this.questionService.addQuestion(this.sharedService.newQuestion)
      .subscribe(question => {
        this.questions.push(question);
        this.sharedService.newQuestion = {
          id: '',
          question: '',
          options: [],
          correctAnswer: '',
          distractors: []
        };
        this.optionsAsString = '';
        this.distractorsAsString = '';
      });
  }

  resetForm(): void {
    this.sharedService.newQuestion = {
      id: '',
      question: '',
      options: [],
      correctAnswer: '',
      distractors: []
    };
    this.optionsAsString = '';
    this.distractorsAsString = '';
  }
  get newQuestion(): Question {
    return this.sharedService.newQuestion;
  }
  onQuestionSelected(question: Question): void {
    this.sharedService.updateNewQuestion(question);
    this.optionsAsString = JSON.stringify(this.sharedService.newQuestion.options);
    this.distractorsAsString = JSON.stringify(this.sharedService.newQuestion.distractors);
  }
}
