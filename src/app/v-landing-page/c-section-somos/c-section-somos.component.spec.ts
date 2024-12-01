import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionSomosComponent } from './c-section-somos.component';

describe('CSectionSomosComponent', () => {
  let component: CSectionSomosComponent;
  let fixture: ComponentFixture<CSectionSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSectionSomosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSectionSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
