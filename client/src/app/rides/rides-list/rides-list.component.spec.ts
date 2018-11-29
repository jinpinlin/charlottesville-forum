import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesListComponent } from './rides-list.component';

describe('RidesListComponent', () => {
  let component: RidesListComponent;
  let fixture: ComponentFixture<RidesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
