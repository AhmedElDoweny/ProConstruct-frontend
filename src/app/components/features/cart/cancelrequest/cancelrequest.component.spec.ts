import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelrequestComponent } from './cancelrequest.component';

describe('CancelrequestComponent', () => {
  let component: CancelrequestComponent;
  let fixture: ComponentFixture<CancelrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
