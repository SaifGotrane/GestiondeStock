import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsriptionComponent } from './page-insription.component';

describe('PageInsriptionComponent', () => {
  let component: PageInsriptionComponent;
  let fixture: ComponentFixture<PageInsriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInsriptionComponent]
    });
    fixture = TestBed.createComponent(PageInsriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
