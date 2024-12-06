import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeditarPerfilComponent } from './ceditar-perfil.component';

describe('CeditarPerfilComponent', () => {
  let component: CeditarPerfilComponent;
  let fixture: ComponentFixture<CeditarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeditarPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
