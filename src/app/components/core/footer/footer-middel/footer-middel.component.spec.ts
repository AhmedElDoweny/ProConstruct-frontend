import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMiddelComponent } from './footer-middel.component';

describe('FooterMiddelComponent', () => {
  let component: FooterMiddelComponent;
  let fixture: ComponentFixture<FooterMiddelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMiddelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMiddelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
