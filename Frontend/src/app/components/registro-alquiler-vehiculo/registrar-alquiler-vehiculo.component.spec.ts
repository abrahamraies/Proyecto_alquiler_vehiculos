import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlquilerVehiculoComponent } from './registrar-alquiler-vehiculo.component';

describe('RegistrarAlquilerVehiculoComponent', () => {
  let component: RegistrarAlquilerVehiculoComponent;
  let fixture: ComponentFixture<RegistrarAlquilerVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAlquilerVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAlquilerVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
