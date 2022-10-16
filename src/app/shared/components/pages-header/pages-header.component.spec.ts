import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHeaderComponent } from './pages-header.component';

describe('PagesHeaderComponent', () => {
  let component: PagesHeaderComponent;
  let fixture: ComponentFixture<PagesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
