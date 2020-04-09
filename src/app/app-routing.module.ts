import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';


const routes: Routes = [
  { 
    path: 'questions', 
    component: QuestionnaireComponent 
  },
  { path: '',
    redirectTo: '/questions',
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: QuestionnaireComponent 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
