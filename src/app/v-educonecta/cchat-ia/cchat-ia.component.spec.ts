import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CchatIAComponent } from './cchat-ia.component';

describe('CchatIAComponent', () => {
  let component: CchatIAComponent;
  let fixture: ComponentFixture<CchatIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CchatIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CchatIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
