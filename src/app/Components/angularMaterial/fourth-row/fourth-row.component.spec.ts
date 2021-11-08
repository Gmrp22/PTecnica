import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthRowComponent } from './fourth-row.component';

describe('FourthRowComponent', () => {
  let component: FourthRowComponent;
  let fixture: ComponentFixture<FourthRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
