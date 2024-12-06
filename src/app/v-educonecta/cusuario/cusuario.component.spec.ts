import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusuarioComponent } from './cusuario.component';

describe('CusuarioComponent', () => {
  let component: CusuarioComponent;
  let fixture: ComponentFixture<CusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
