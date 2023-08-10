import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { QuestionTableComponent } from './question-table/question-table.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionManagementComponent,
    QuestionTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
