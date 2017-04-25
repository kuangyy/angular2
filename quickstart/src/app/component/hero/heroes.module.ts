/**
 * Created by ky on 2017/4/19.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'contact', component: HeroesComponent }
    ])],
    exports: [RouterModule]
})
export class HeroRoutingModule {}
