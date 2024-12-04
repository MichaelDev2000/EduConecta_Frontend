import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPerfilComponent } from './v-perfil.component';

describe('VPerfilComponent', () => {
  let component: VPerfilComponent;
  let fixture: ComponentFixture<VPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
