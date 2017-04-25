import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-app',
    // template: `
    // `,
    templateUrl: './html/app.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    title = 'Tour of Heroes';


    constructor(private router: Router) {
    }

    clickRouter(): void {
        // this.location.back();
        // router
        this.router.navigate(['/heroes', []]);
    }
}
