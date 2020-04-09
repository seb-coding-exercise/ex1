import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './questionnaire.component';
import { testQuestions } from '../shared/data/testData';
import { RadioComponent } from '../components/radio/radio.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireComponent, RadioComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    expect(component.questionnareForm.valid).toBeFalsy();
  }));

  it('form should be valid after entering values', async(() => {
    const questions = testQuestions;
    questions.forEach(question => {
      component.questionnareForm.controls[question.key].setValue(question.options[0].value);
    });
    expect(component.questionnareForm.valid).toBeTruthy();
  }));

});
