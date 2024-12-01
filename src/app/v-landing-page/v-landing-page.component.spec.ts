import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VLandingPageComponent } from './v-landing-page.component';

describe('VLandingPageComponent', () => {
  let component: VLandingPageComponent;
  let fixture: ComponentFixture<VLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
