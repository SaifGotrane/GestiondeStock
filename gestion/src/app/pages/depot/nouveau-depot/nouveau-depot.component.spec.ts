import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauDepotComponent } from './nouveau-depot.component';

describe('NouveauDepotComponent', () => {
  let component: NouveauDepotComponent;
  let fixture: ComponentFixture<NouveauDepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauDepotComponent]
    });
    fixture = TestBed.createComponent(NouveauDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
