import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValDayComponent } from './val-day.component';

describe('ValDayComponent', () => {
  let component: ValDayComponent;
  let fixture: ComponentFixture<ValDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
