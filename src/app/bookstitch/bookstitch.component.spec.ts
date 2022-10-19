import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstitchComponent } from './bookstitch.component';

describe('BookstitchComponent', () => {
  let component: BookstitchComponent;
  let fixture: ComponentFixture<BookstitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
