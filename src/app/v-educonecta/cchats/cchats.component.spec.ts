import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CchatsComponent } from './cchats.component';

describe('CchatsComponent', () => {
  let component: CchatsComponent;
  let fixture: ComponentFixture<CchatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CchatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
