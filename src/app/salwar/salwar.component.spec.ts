import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalwarComponent } from './salwar.component';

describe('SalwarComponent', () => {
  let component: SalwarComponent;
  let fixture: ComponentFixture<SalwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalwarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
