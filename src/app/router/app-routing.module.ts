import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from '../component/dashboard/dashboard.component';
import {HeroesComponent}      from '../component/hero/heroes.component';
import {HeroDetailComponent}  from '../component/detail/hero-detail.component';
import {PageNotFoundComponent} from '../component/common/pageNotFoundComponent.component';


const routes: Routes = [
    // default route        Redirecting routes
    // 默认路由将匹配所有链接
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    // {path: 'heroes', component: HeroesComponent},
    {path: 'heroes', loadChildren: './src/app/component/hero/heros.module#HeroRoutingModule'},

// Wildcard route 通配符路径
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
