// The browser platform with a compiler 动态编译
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// The browser platform without a compiler 预编译
import { platformBrowser } from '@angular/platform-browser';

// 根模块引导
// import {AppModule} from './app/app.module';
// The app module factory produced by the static offline compiler
import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';


import {enableProdMode} from '@angular/core';

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}


// 引导

// 通过即时 (JiT) 编译器动态引导
// platformBrowserDynamic().bootstrapModule(AppModule).catch(errorHandler);

// 使用预编译器 (AoT - Ahead-Of-Time) 进行静态引导
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(errorHandler);

function errorHandler(err: any) {
    console.error(err);
}
