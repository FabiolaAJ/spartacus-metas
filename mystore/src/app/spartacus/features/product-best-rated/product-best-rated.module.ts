import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CmsPageGuard, StarRatingModule } from "@spartacus/storefront";
import { ProductBestRatedComponent } from "./components/best-rated/product-best-rated.component";
import { BestProductComponent } from "./components/best-product/best-product.component";
import { ProductCommentsComponent } from "./components/product-comments/product-comments.component";
import { CommonModule } from "@angular/common";
import { CxDatePipe } from "@spartacus/core";

@NgModule({
    declarations: [
        ProductBestRatedComponent,
        BestProductComponent,
        ProductCommentsComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
              path: 'best-rated',                                           // Aqui eu adiciono a Rota da minha página. Ficando algo parecido com http://localhost:4200/carrinho ou http://localhost:4200/electronics-spa/en/USD/carrinho (HTTP ou HTTPS)
              component: ProductBestRatedComponent,                             // Aqui eu informo o componente responsável por renderizar a página.
              data: { pageLabel: 'best-rated' },    // Aqui eu informo qual a minha nova página CMS
              canActivate: [CmsPageGuard]                                 // Aqui eu adiciono um Gard que funciona como um interceptor e ele informa que ela terá o template padrão com Header e Footer do Site
            }
          ]),
        CommonModule,
        StarRatingModule,
    ],
    providers: [
      CxDatePipe
    ]
  })
  export class ProductBestRatedModule { }