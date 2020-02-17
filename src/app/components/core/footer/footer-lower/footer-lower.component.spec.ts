import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterLowerComponent} from './footer-lower.component';

describe('FooterLowerComponent', () => {
  let component: FooterLowerComponent;
  let fixture: ComponentFixture<FooterLowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterLowerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
