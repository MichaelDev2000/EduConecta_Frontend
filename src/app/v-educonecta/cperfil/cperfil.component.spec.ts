import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CperfilComponent } from './cperfil.component';

describe('CperfilComponent', () => {
  let component: CperfilComponent;
  let fixture: ComponentFixture<CperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CperfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
