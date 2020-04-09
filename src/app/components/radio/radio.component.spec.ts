import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { testQuestions } from 'src/app/shared/data/testData';
import { RadioComponent } from './radio.component';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';


describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a render with a label', () => {
    const question = testQuestions[0];
    const control = new FormControl('');
    component.control = control;
    component.question = question;
    const productElement: HTMLElement = fixture.nativeElement;
    fixture.detectChanges();
    const p = productElement.querySelector('p');
    expect(p.textContent).toEqual(question.label);
  });

});
