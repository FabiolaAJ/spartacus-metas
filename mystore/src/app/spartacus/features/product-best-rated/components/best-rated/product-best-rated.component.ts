import { Component, OnInit ,  EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductReviewService, ProductSearchPage, ProductSearchService, ProductService, Review, SearchConfig } from '@spartacus/core';
import { ProductListComponentService, ViewConfig } from '@spartacus/storefront';
import { Observable, Subscription, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-best-rated',
  templateUrl: './product-best-rated.component.html',
  styleUrls: ['./product-best-rated.component.scss']
})
export class ProductBestRatedComponent implements OnInit {
  bestsProducts$? : Observable<any>;  
  productCode?:any;
  productName?:any;
  reviews$?: Observable<Review[]>;
  showReviews$? : Subscription

  constructor(private productListComponentService : ProductListComponentService,private reviewService : ProductReviewService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.verifyUrl();
    this.getBestProducts();
  }
  verifyUrl(){
    const queryParams = { ...this.route.snapshot.queryParams };
    if(!queryParams['sortCode']){
      queryParams['sortCode'] = 'topRated';
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge'
      });
    }
  }
  getBestProducts(){
    this.bestsProducts$ =  this.productListComponentService.model$.pipe(
        map((productSearchPage) => {
            return productSearchPage.products?.slice(0,5);
         }));
  }
  getReviews(){
    this.showReviews$ = this.reviewService.getByProductCode(this.productCode).subscribe(
      reviews => {
        if(reviews){
          var showReviews = reviews.slice(0,5)
          this.reviews$ = of(showReviews);
          console.log(this.reviews$)
        }

      },
      error => {
        console.error("Error fetching reviews:", error);
      }
    );
  }
  showReview(productReview: any ){
   this.productCode = productReview.code ;
   this.productName = productReview.name;
   if (this.showReviews$) {
    this.showReviews$.unsubscribe();
   }
   this.getReviews();
  }

}
