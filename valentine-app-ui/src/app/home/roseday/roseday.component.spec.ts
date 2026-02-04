import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosedayComponent } from './roseday.component';

describe('RosedayComponent', () => {
  let component: RosedayComponent;
  let fixture: ComponentFixture<RosedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RosedayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RosedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
