import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit {
  @Input() questions: Question[] = [];
  @Output() questionSelected = new EventEmitter<Question>();

  constructor(
    private questionService: QuestionService,
    private sharedService: SharedServiceService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
    .subscribe(questions => this.questions = questions);
  }

  delete(question: Question): void {
    this.questions = this.questions.filter(x => x.id !== question.id);
    this.questionService.deleteQuestion(question.id).subscribe();
  }
  edit(question: Question): void {
    this.sharedService.updateNewQuestion(question);
  }
}
