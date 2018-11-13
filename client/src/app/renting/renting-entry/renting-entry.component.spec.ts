import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingEntryComponent } from './renting-entry.component';

describe('RentingEntryComponent', () => {
  let component: RentingEntryComponent;
  let fixture: ComponentFixture<RentingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
