import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { testQuestions } from 'src/app/shared/data/testData';
import { ApiService } from 'src/app/shared/api.service';
import { Question } from '../shared/types/question';
import { Product } from '../shared/types/Product';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questions: Question[] = testQuestions;
  availableProducts:Product[] = [];
  isFormLoading:boolean = false;



  questionnareForm = new FormGroup({});

  constructor(private api: ApiService) {
    for(let question of this.questions){
      this.questionnareForm.addControl(question.key, new FormControl('', Validators.required));
    }
  }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.questionnareForm.markAllAsTouched();
    if (!this.questionnareForm.valid || this.isFormLoading){
      return;
    }
    this.isFormLoading = true;
    this.availableProducts = [];
    this.api.postAnswers(this.questionnareForm.value).subscribe(
      (products: Product[]) =>{
        this.availableProducts = products;
        this.isFormLoading = false;
      },
      (error)=>{
        this.isFormLoading = false;
        console.log("oh no, something went wrong...");
      }
    );
  }


}
