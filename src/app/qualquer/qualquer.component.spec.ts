import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualquerComponent } from './qualquer.component';

describe('QualquerComponent', () => {
  let component: QualquerComponent;
  let fixture: ComponentFixture<QualquerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualquerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
