import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telugu } from './telugu';

describe('Telugu', () => {
  let component: Telugu;
  let fixture: ComponentFixture<Telugu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Telugu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Telugu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
