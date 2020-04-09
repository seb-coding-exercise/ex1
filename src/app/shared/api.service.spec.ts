import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Product } from './types/Product';
import { testQuestions } from './data/testData';
import { Question } from './types/question';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProductsByAnswers()', () => {

    it('should return an <Array<Product>>',

      inject([ApiService], (ApiService) => {

        const testAnswer = {};
        const questions: Question[] = testQuestions;
        let productList = [];
        questions.forEach(question => {
          testAnswer[question.key] = question.options[0].value;
        });

        productList = ApiService.getProductsByAnswers();
        expect(productList.length).toBe(0);

        productList = ApiService.getProductsByAnswers(testAnswer);
        expect(productList.length).toBe(1);

      }));
  });

});
