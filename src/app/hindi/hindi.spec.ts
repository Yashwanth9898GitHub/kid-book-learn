import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hindi } from './hindi';

describe('Hindi', () => {
  let component: Hindi;
  let fixture: ComponentFixture<Hindi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hindi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hindi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
