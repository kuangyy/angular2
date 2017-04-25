import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppRoutingModule} from './router/app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
// in memery data service
import {InMemoryDataService}  from './service/in-memory-data.service';

import {AppComponent}         from './app.component';
import {DashboardComponent}   from './component/dashboard/dashboard.component';
import {HeroesComponent}      from './component/hero/heroes.component';
import {HeroDetailComponent}  from './component/detail/hero-detail.component';
import {HeroService}          from './service/hero/hero.service';
import {HeroSearchComponent}  from './component/search/hero-search.component';
import {PageNotFoundComponent} from './component/common/pageNotFoundComponent.component';
import {HighlightDirective} from './directive/Highlight.directive';
import {AwesomePipe} from './pipe/awesome.pipe';

@NgModule({
    imports: [
        // 每个运行在浏览器中的应用都必须导入它
        // 注册了一些关键的应用服务提供商。 它还包括了一些通用的指令，例如NgIf和NgFor，所以这些指令在该模块的任何组件模板中都是可用的。
        BrowserModule,
        // 表单模块
        FormsModule,
        // http模块
        HttpModule,
        // 内存数据库模块
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        // router
        AppRoutingModule,
    ],
    declarations: [
        // 组件
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,

        // 声明指令
        HighlightDirective,
        // 管道
        AwesomePipe,
        // 异常组件
        PageNotFoundComponent
    ],
    providers: [HeroService],
    // bootstrap | root of app
    bootstrap: [AppComponent]
})
export class AppModule {
}
