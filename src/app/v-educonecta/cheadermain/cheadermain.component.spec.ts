import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheadermainComponent } from './cheadermain.component';

describe('CheadermainComponent', () => {
  let component: CheadermainComponent;
  let fixture: ComponentFixture<CheadermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheadermainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheadermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
