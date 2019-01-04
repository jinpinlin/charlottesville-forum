import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesDetailComponent } from './rides-detail.component';

describe('RidesDetailComponent', () => {
  let component: RidesDetailComponent;
  let fixture: ComponentFixture<RidesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
