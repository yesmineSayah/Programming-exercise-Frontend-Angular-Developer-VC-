import { Component } from '@angular/core';
import { PriceService } from '../services/price.service';
import { Router } from '@angular/router'
import { Price } from '../price';
@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent {
  price: Price;
  valid: boolean;
  constructor(private priceservice: PriceService, private router:Router) {
    this.price = new Price("", 0, 0);
    this.valid = false;
  }

  saveOperator() {
    this.priceservice.saveOperator(this.price);
    this.router.navigateByUrl('/home');
  }

  getOperators() {
    return this.priceservice.operatoresList();
  }

  onChange($event) {
    if (this.price.operator === "new operator") {
      this.valid = true;
    }
  }

}
