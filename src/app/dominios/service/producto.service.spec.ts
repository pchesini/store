import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductoService } from './producto.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      //sel lo agregue
      providers: [ProductoService]
    });
    service = TestBed.inject(ProductoService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
