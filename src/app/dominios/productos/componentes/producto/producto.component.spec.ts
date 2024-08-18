import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './producto.component';

class MockActivatedRoute {
  params = of({ id: '1' }); //
}


describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductoComponent, HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ]
    });
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    component.producto = {
      id: 1,
      title: 'Sample Product',
      description: 'descripcion',
      price: 19.99,
      images: ['path/to/image.jpg'],
      creationAt:'16/12/14',
      category: {
        id: 1,
        name: 'nombre categoria',
        image: 'path/to/image.jpg'
    }
    
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
