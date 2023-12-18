import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { BaseSite, BaseSiteService, BaseSiteState, CmsService, THEME_CONTEXT_ID } from '@spartacus/core';
import { BaseSiteAction } from '@spartacus/core/src/site-context/store/actions/base-site.action';
import { ThemeModule, ThemeService } from '@spartacus/storefront';
import { initTheme } from '@spartacus/storefront/layout/theme/theme.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'mystore';
  theme?: any = "";

  constructor(private baseSiteService: BaseSiteService) { }


  ngOnInit(){
     this.baseSiteService.get().subscribe((data) => {
      this.theme = data?.theme;
    });
  }
  
}






  
  
  
  
  
  
  

