import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvistamainComponent } from './cvistamain.component';

describe('CvistamainComponent', () => {
  let component: CvistamainComponent;
  let fixture: ComponentFixture<CvistamainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvistamainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvistamainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
