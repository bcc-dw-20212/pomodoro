import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaexemploComponent } from './caixaexemplo.component';

describe('CaixaexemploComponent', () => {
  let component: CaixaexemploComponent;
  let fixture: ComponentFixture<CaixaexemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaexemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaexemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
