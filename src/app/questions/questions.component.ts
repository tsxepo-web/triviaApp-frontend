import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  randomQuestion: Question | undefined;
  selectedOption: string | undefined;
  showResult: boolean = false;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getQuestion();
  }
  getQuestion(): void {
    this.questionService.getRandomQuestion()
      .subscribe(question => {
        this.randomQuestion = question;
        this.selectedOption = undefined;
        this.showResult = false;
      });
  }
  onOptionSelected(option: string): void {
    this.selectedOption = option;
  }
  checkAnswer(): void {
    this.showResult = true;
  }
  nextQuestion(): void {
    this.getQuestion();
  }
}