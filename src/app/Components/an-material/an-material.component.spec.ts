import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnMaterialComponent } from './an-material.component';

describe('AnMaterialComponent', () => {
  let component: AnMaterialComponent;
  let fixture: ComponentFixture<AnMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
