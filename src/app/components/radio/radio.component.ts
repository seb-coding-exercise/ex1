import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Question } from 'src/app/shared/types/question';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  constructor() { }

  @Input() control: FormControl;
  @Input() question: Question;

  ngOnInit(): void {

  }

}
