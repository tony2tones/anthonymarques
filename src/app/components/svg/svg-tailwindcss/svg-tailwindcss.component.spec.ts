import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTailwindcssComponent } from './svg-tailwindcss.component';

describe('SvgTailwindcssComponent', () => {
  let component: SvgTailwindcssComponent;
  let fixture: ComponentFixture<SvgTailwindcssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgTailwindcssComponent]
    });
    fixture = TestBed.createComponent(SvgTailwindcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
