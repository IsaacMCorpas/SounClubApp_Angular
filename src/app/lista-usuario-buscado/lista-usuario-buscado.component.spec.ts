import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuarioBuscadoComponent } from './lista-usuario-buscado.component';

describe('ListaUsuarioBuscadoComponent', () => {
  let component: ListaUsuarioBuscadoComponent;
  let fixture: ComponentFixture<ListaUsuarioBuscadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuarioBuscadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuarioBuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
