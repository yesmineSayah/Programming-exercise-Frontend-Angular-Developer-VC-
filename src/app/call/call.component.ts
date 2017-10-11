import { Component, OnInit, Input } from '@angular/core';
import { PriceService } from '../services/price.service';
@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  private phone: number;
  private msg: string;

  constructor(private priceService: PriceService) {
  }

  ngOnInit() {
      localStorage.prcies =this.priceService.prices;
  }

  onChange() {
    if (this.phone) {
      let arr = this.priceService.filter(this.phone)
      if (arr.length > 0) {
        //arr contains an array of valid prefixes sorted by length of prefixes(longest first)
        // and prices (cheapest first)
        this.msg = + arr[0].prefix+" is the cheapest prefix "  + " with the operator " + arr[0].operator + " for : " + arr[0].pricemn + "$/min";
      } else {
        this.msg = "This prefix doesn't exist"
      }
    }
    else {
      this.msg = "";
    }
  }


}
