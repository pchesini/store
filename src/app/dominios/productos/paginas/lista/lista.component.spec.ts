import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './lista.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class MockActivatedRoute {
  // Mock para ActivatedRoute, puedes añadir más propiedades según sea necesario
  params = of({}); // Ejemplo de cómo devolver valores simulados
}

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaComponent, HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        
      ]
    });
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
