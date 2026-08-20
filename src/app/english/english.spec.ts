import { ComponentFixture, TestBed } from '@angular/core/testing';

import { English } from './english';

describe('English', () => {
  let component: English;
  let fixture: ComponentFixture<English>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [English]
    })
    .compileComponents();

    fixture = TestBed.createComponent(English);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
