import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBestRatedComponent } from './product-best-rated.component';

describe('ProductBestRatedComponent', () => {
  let component: ProductBestRatedComponent;
  let fixture: ComponentFixture<ProductBestRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBestRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBestRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
