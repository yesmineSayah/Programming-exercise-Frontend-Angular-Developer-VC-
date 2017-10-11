import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { OperatorComponent } from './operator.component';
import { PriceService } from '../services/price.service';
import { Router,RouterModule } from '@angular/router'
import {APP_BASE_HREF} from '@angular/common';


describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorComponent ],
      imports : [
        FormsModule,
        RouterModule.forRoot([])
      ],
      providers:[PriceService,{ provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
