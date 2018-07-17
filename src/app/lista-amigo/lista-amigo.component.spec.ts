import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAmigoComponent } from './lista-amigo.component';

describe('ListaAmigoComponent', () => {
  let component: ListaAmigoComponent;
  let fixture: ComponentFixture<ListaAmigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAmigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
