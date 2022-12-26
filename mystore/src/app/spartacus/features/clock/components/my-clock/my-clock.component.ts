

import { Component } from '@angular/core';
import { ICON_TYPE } from '@spartacus/storefront';

@Component({
    selector : 'cx-mini-cart',
    templateUrl: './my-clock.component.html',
    styleUrls: ['./my-clock.component.scss']

  
})

export class MyClockComponent {
    iconTypes = ICON_TYPE;
    myDateTime = new Date();

  
}





