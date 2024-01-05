import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { I18nModule, provideConfig } from "@spartacus/core";
import { AppRoutingModule, PWAModuleConfig } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { StructureModule } from "./spartacus/features/structure/structure.module";
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    StructureModule,
    I18nModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('ngsw-worker.js')
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ provideConfig({
    pwa: {
      enabled: true,
      addToHomeScreen: true
    }
  } as PWAModuleConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
