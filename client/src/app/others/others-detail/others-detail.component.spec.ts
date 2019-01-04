import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersDetailComponent } from './others-detail.component';

describe('OthersDetailComponent', () => {
  let component: OthersDetailComponent;
  let fixture: ComponentFixture<OthersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
