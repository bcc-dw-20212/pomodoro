import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarpersonComponent } from './starperson.component';

describe('StarpersonComponent', () => {
  let component: StarpersonComponent;
  let fixture: ComponentFixture<StarpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
