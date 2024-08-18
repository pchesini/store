import { TestBed } from '@angular/core/testing';
import { CartServiceService } from './cart-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartServiceService', () => {
  let service: CartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [CartServiceService]
    });
    service = TestBed.inject(CartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
