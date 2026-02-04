import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedayComponent } from './proposeday.component';

describe('ProposedayComponent', () => {
  let component: ProposedayComponent;
  let fixture: ComponentFixture<ProposedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposedayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
