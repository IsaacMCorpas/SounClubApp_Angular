import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuarioBusquedaComponent } from './datos-usuario-busqueda.component';

describe('DatosUsuarioBusquedaComponent', () => {
  let component: DatosUsuarioBusquedaComponent;
  let fixture: ComponentFixture<DatosUsuarioBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosUsuarioBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUsuarioBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
