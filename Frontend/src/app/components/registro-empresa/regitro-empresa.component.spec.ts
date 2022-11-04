import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitroEmpresaComponent } from './regitro-empresa.component';

describe('RegitroEmpresaComponent', () => {
  let component: RegitroEmpresaComponent;
  let fixture: ComponentFixture<RegitroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitroEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegitroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
