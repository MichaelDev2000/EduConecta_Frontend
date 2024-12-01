import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionMainComponent } from './c-section-main.component';

describe('CSectionMainComponent', () => {
  let component: CSectionMainComponent;
  let fixture: ComponentFixture<CSectionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSectionMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
