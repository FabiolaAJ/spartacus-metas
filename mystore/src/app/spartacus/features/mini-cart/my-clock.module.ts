import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CmsConfig, I18nModule, provideConfig, UrlModule } from "@spartacus/core";
import { IconModule } from "@spartacus/storefront";
import { MyClockComponent } from "./components/my-clock/my-clock.component";

@NgModule({
    imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule],

    declarations: [
        MyClockComponent
    ],
    providers : [
        provideConfig({
            cmsComponents : {
                MiniCartComponent : {
                    component : MyClockComponent
                }
            }
        } as CmsConfig)
    ],
    exports: [MyClockComponent],

})

export class MyClockModule {
    
}