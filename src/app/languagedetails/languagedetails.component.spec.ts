import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagedetailsComponent } from './languagedetails.component';

describe('LanguagedetailsComponent', () => {
  let component: LanguagedetailsComponent;
  let fixture: ComponentFixture<LanguagedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
