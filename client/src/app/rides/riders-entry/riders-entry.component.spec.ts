import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersEntryComponent } from './riders-entry.component';

describe('RidersEntryComponent', () => {
  let component: RidersEntryComponent;
  let fixture: ComponentFixture<RidersEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidersEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidersEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
