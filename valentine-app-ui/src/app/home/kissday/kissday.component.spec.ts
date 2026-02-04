import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissdayComponent } from './kissday.component';

describe('KissdayComponent', () => {
  let component: KissdayComponent;
  let fixture: ComponentFixture<KissdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KissdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KissdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
