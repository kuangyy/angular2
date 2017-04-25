/**
 * Created by ky on 2017/4/19.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'error-page',
    templateUrl: './pageNotFoundComponent.component.html',
    // styleUrls: [ './dashboard.component.css' ]
})
export class PageNotFoundComponent {
    errorMessage: string;
    errorCode: number;
}
