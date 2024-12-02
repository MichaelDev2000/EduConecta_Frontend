import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEduconectaComponent } from './v-educonecta.component';

describe('VEduconectaComponent', () => {
  let component: VEduconectaComponent;
  let fixture: ComponentFixture<VEduconectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VEduconectaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VEduconectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
