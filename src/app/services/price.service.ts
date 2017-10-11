import { Injectable } from '@angular/core';
import { Price } from '../price';


@Injectable()
export class PriceService {
  public prices: Price[];
  public operators: String[];
  constructor() {
    this.prices = [{
      operator: "a",
      prefix: 123,
      pricemn: 1.2
    },
    {
      operator: "b",
      prefix: 56,
      pricemn: 0.9
    },
    {
      operator: "b",
      prefix: 569,
      pricemn: 0.5
    },
    {
      operator: "a",
      prefix: 569,
      pricemn: 0.1
    }]

  }
  filter(phone: number) {
    return this.prices.filter(e => {
      if (phone.toString().indexOf(e.prefix.toString()) === 0) {
        return true;
      }
      return false;
    }).sort((a, b) => {
      if (a.prefix.toString().length < b.prefix.toString().length) {
        return 1;
      }
      else if (a.prefix.toString().length > b.prefix.toString().length) {
        return -1
      }
      else {
        if (a.pricemn > b.pricemn) {
          return 1;
        } else if (a.pricemn < b.pricemn) {
          return -1
        } else return 0;
      }
    });
  }

  saveOperator(price) {
    let doNotPush = false;
    for (var i = 0; i < this.prices.length; i++) {
      if (price.operator === this.prices[i].operator &&
        price.prefix === this.prices[i].prefix &&
        price.pricemn === this.prices[i].pricemn
      ) {
        doNotPush = true;
        break;
      }
    }
    if (!doNotPush) {
      this.prices.push(price);
    }
  }

  operatoresList() {
    this.operators = new Array();
    for (var i = 0; i < this.prices.length; i++) {
      let doNotPush = false;
      for (var j = 0; j < this.operators.length; j++) {
        if (this.operators[j] === this.prices[i].operator) {
          doNotPush = true;
          break;
        }
      }
      if (!doNotPush) {
        this.operators.push(this.prices[i].operator);
      }
    }
    return this.operators;
  }


}
