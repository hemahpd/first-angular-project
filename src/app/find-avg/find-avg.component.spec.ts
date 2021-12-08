import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAvgComponent } from './find-avg.component';

describe('FindAvgComponent', () => {
  let component: FindAvgComponent;
  let fixture: ComponentFixture<FindAvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
