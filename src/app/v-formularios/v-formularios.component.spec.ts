import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFormulariosComponent } from './v-formularios.component';

describe('VFormulariosComponent', () => {
  let component: VFormulariosComponent;
  let fixture: ComponentFixture<VFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VFormulariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
