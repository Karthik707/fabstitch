import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehangaComponent } from './lehanga.component';

describe('LehangaComponent', () => {
  let component: LehangaComponent;
  let fixture: ComponentFixture<LehangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LehangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LehangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
