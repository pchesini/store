import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LayoutComponent } from './layout.component';
import { ActivatedRoute } from '@angular/router';
describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutComponent,HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute, // Proveedor para ActivatedRoute
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'algun valor', // Simula el valor de un parámetro de ruta
              },
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
