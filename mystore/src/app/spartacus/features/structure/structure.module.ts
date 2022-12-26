import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ConfigModule, I18nModule, UrlModule } from "@spartacus/core";
import { CartSharedModule, GenericLinkModule, LinkModule, MediaModule, PageComponentModule, PageSlotModule } from "@spartacus/storefront";
import { MyBottomHeaderSlotComponent } from "./ myBottomHeader/my-bottom-header-slot.component";

const COMPONENTS = [
    MyBottomHeaderSlotComponent
];
@NgModule({
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [
        CommonModule,
        CartSharedModule,
        RouterModule,
        I18nModule,
        UrlModule,
        GenericLinkModule,
        PageComponentModule,
        PageSlotModule,
        ReactiveFormsModule,
        MediaModule,
        LinkModule,
      
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
   
})

export class StructureModule {

}
