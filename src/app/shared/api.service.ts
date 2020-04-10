import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { testProducts } from './data/testData';
import { Product } from './types/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public postAnswers(answers): Observable<Array<Product>>{
    // fake response with simulated delay
    return of(this.getProductsByAnswers(answers)).pipe(
      delay(400)
    );
  }

  private getProductsByAnswers(answers){
    // creating array for available products
    let availableProducts = [];
    // checking if answers submitted
    if (!answers) {
      return availableProducts;
    }

    for(let product of testProducts){
      // creating array for product rules which pass the test
      // (useful for error reporting in the future version)
      let productRulesPassed = [];
      // iterating through product rules
      for(let rule of product.rules){
        // check if user answer exists
        if (!answers.hasOwnProperty(rule.key)) continue;
        // check if user answer exists in allowed values of the rule
          if (rule.allowed.includes(answers[rule.key])){
            // if answer exists, the rule is added to passed rule list
            productRulesPassed.push(rule.key);
          }
      }
      // if product passes all the rules, it gets added to available product list
      if (productRulesPassed.length === product.rules.length){
          availableProducts.push(product);
      }
    }
    // returning list of available pro
    return availableProducts;
  }

}
