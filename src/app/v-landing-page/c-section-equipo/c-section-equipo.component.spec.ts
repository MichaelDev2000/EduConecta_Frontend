import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionEquipoComponent } from './c-section-equipo.component';

describe('CSectionEquipoComponent', () => {
  let component: CSectionEquipoComponent;
  let fixture: ComponentFixture<CSectionEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSectionEquipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSectionEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
