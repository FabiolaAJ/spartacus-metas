import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.scss']
})
export class ProductCommentsComponent implements OnInit {
  @Input() review?: any
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.review)
  }
 
  

}
