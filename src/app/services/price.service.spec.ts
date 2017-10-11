import { TestBed, inject } from '@angular/core/testing';

import { PriceService } from './price.service';

describe('PriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceService]
    });
  });

  it('should be created', inject([PriceService], (service: PriceService) => {
    expect(service).toBeTruthy();
  }));

  //testing the filter function
  it('should return operator a for number 12332', inject([PriceService], (service: PriceService) => {
    expect(service.filter(12332)[0].operator).toBe("a");
  }));
  it('should return operator b for number 56123', inject([PriceService], (service: PriceService) => {
    expect(service.filter(56123)[0].operator).toBe("b");
  }));
  it('should return operator a for number 56943534', inject([PriceService], (service: PriceService) => {
    expect(service.filter(56943534)[0].operator).toBe("a");
  }));

  it('should add a price', inject([ PriceService], (service: PriceService) => {
    let len = service.prices.length;
    service.saveOperator({ operator: "c", prefix: 23, pricemn: 0.03 });
    len++;
    expect(service.prices.length).toBe(len);
  }));

  it('should not add an existing price', inject([ PriceService], ( service: PriceService) => {
    let len = service.prices.length;
    service.saveOperator({ operator:"a",
    prefix : 123,
    pricemn :1.2 });
    expect(service.prices.length).toBe(len);
  }));


  it('should return an array that contain a and b', inject([ PriceService], (service: PriceService) => {
    let operators = service.operatoresList();  
    expect(operators[0]==="a"&&operators[1]==="b").toBe(true);
  }));
});
