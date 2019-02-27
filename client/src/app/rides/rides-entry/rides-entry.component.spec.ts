import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesEntryComponent } from './rides-entry.component';

describe('RidesEntryComponent', () => {
  let component: RidesEntryComponent;
  let fixture: ComponentFixture<RidesEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
