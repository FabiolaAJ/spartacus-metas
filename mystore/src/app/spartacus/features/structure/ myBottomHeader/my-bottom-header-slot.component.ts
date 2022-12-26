

import { Component } from '@angular/core';
import { CmsService, ContentSlotComponentData } from '@spartacus/core';
import { Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
    selector : '/my-bottom-header-slot',
    templateUrl: './my-bottom-header-slot.component.html',
    styleUrls: ['./my-bottom-header-slot.component.scss']

  
})

export class MyBottomHeaderSlotComponent {


    components$: Observable<{ [key: string]: ContentSlotComponentData }> =
    this.cmsService.getContentSlot('Footer')
      .pipe(
        filter((content :any) => !!(content.components && content.components.length)),
        map((content:any) => {
          const comps :any = {};
          content.components.forEach((component:any) => {
            comps[component.uid] = component;
          });
          return comps;
        })
      );


  constructor(private cmsService: CmsService) {
  }

  
}





