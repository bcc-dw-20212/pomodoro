import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloconfigComponent } from './cicloconfig.component';

describe('CicloconfigComponent', () => {
  let component: CicloconfigComponent;
  let fixture: ComponentFixture<CicloconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
