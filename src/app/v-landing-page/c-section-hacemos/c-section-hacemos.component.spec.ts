import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSectionHacemosComponent } from './c-section-hacemos.component';

describe('CSectionHacemosComponent', () => {
  let component: CSectionHacemosComponent;
  let fixture: ComponentFixture<CSectionHacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSectionHacemosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSectionHacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
