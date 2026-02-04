import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugdayComponent } from './hugday.component';

describe('HugdayComponent', () => {
  let component: HugdayComponent;
  let fixture: ComponentFixture<HugdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HugdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HugdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
