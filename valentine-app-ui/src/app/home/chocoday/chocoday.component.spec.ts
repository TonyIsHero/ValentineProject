import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocodayComponent } from './chocoday.component';

describe('ChocodayComponent', () => {
  let component: ChocodayComponent;
  let fixture: ComponentFixture<ChocodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChocodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
