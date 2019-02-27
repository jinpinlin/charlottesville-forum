import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingDetailComponent } from './renting-detail.component';

describe('RentingDetailComponent', () => {
  let component: RentingDetailComponent;
  let fixture: ComponentFixture<RentingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
