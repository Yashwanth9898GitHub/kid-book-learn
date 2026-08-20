import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Math } from './math';

describe('Math', () => {
  let component: Math;
  let fixture: ComponentFixture<Math>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Math]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Math);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
