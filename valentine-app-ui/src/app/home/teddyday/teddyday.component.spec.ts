import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddydayComponent } from './teddyday.component';

describe('TeddydayComponent', () => {
  let component: TeddydayComponent;
  let fixture: ComponentFixture<TeddydayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeddydayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeddydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
