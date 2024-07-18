import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseNavbarComponent } from './showcase-navbar.component';

describe('ShowcaseNavbarComponent', () => {
  let component: ShowcaseNavbarComponent;
  let fixture: ComponentFixture<ShowcaseNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcaseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
