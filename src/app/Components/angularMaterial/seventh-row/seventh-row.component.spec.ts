import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhRowComponent } from './seventh-row.component';

describe('SeventhRowComponent', () => {
  let component: SeventhRowComponent;
  let fixture: ComponentFixture<SeventhRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
