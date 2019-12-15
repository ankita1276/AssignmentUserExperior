import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencydetailsComponent } from './currencydetails.component';

describe('CurrencydetailsComponent', () => {
  let component: CurrencydetailsComponent;
  let fixture: ComponentFixture<CurrencydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
