import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { ConfigModule, FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [

    ConfigModule.withConfig({
      routing: {
        routes: {
          product: { paths: ['p/:productCode/:name'] }
        }
      }
    }),


  ],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002/'
        }
      },
    }),

    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',

      },
    }), provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
        consignmentTracking: true

      }
    }), provideConfig({
      context: {
        baseSite: ['electronics-spa'],
        currency: ['USD'],
        language: ['en'],
      },
    }), provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    }), provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3'
      }
    }), provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002/'
        }
      },
    }),
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
        }
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
      },
    })
  ]
})
export class SpartacusConfigurationModule { }
