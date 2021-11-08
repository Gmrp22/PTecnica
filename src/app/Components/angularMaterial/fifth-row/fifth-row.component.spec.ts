import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthRowComponent } from './fifth-row.component';

describe('FifthRowComponent', () => {
  let component: FifthRowComponent;
  let fixture: ComponentFixture<FifthRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
