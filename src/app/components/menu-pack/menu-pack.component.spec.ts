import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPackComponent } from './menu-pack.component';

describe('MenuPackComponent', () => {
  let component: MenuPackComponent;
  let fixture: ComponentFixture<MenuPackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPackComponent]
    });
    fixture = TestBed.createComponent(MenuPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
