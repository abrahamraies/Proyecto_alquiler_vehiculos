import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaModificarComponent } from './empresa-modificar.component';

describe('EmpresaModificarComponent', () => {
  let component: EmpresaModificarComponent;
  let fixture: ComponentFixture<EmpresaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
