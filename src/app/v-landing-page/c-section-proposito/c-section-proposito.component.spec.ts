import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionPropositoComponent } from './c-section-proposito.component';

describe('CSectionPropositoComponent', () => {
  let component: CSectionPropositoComponent;
  let fixture: ComponentFixture<CSectionPropositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSectionPropositoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSectionPropositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
