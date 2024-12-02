import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheaderFormComponent } from './cheader-form.component';

describe('CheaderFormComponent', () => {
  let component: CheaderFormComponent;
  let fixture: ComponentFixture<CheaderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheaderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
