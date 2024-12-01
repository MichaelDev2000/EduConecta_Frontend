import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionPorqueComponent } from './c-section-porque.component';

describe('CSectionPorqueComponent', () => {
  let component: CSectionPorqueComponent;
  let fixture: ComponentFixture<CSectionPorqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSectionPorqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSectionPorqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
