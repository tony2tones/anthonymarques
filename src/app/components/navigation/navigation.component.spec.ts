import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavHeaderComponent;
  let fixture: ComponentFixture<NavHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHeaderComponent]
    });
    fixture = TestBed.createComponent(NavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
