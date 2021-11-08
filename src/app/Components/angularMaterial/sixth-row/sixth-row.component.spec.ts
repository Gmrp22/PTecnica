import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthRowComponent } from './sixth-row.component';

describe('SixthRowComponent', () => {
  let component: SixthRowComponent;
  let fixture: ComponentFixture<SixthRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
