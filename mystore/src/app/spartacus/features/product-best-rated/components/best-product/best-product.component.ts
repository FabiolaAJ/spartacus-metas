import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductSearchPage, ProductSearchService } from '@spartacus/core';
import { ProductListComponentService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.scss']
})
export class BestProductComponent implements OnInit {

  @Input() product? : any
  @Output() productReview = new EventEmitter<any>();

  
  constructor() { }


  ngOnInit() {
    console.log(this.product)
  }


  setCode(code : number, name : string){
    this.productReview?.emit({code: code , name : name})
  }
    
}
