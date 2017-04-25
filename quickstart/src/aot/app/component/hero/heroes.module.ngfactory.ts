/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../app/component/hero/heroes.module';
import * as import2 from '@angular/router';
import * as import3 from './heroes.component.ngfactory';
import * as import4 from '../../../../app/component/hero/heroes.component';
class HeroRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.HeroRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _HeroRoutingModule_1:import1.HeroRoutingModule;
  _ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import3.HeroesComponentNgFactory],([] as any[]));
  }
  createInternal():import1.HeroRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._HeroRoutingModule_1 = new import1.HeroRoutingModule();
        this._ROUTES_2 = [[{
          path: 'contact',
          component: import4.HeroesComponent
        }
    ]];
    return this._HeroRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.HeroRoutingModule)) { return this._HeroRoutingModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const HeroRoutingModuleNgFactory:import0.NgModuleFactory<import1.HeroRoutingModule> = new import0.NgModuleFactory<any>(HeroRoutingModuleInjector,import1.HeroRoutingModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovanMvcXVpY2tzdGFydC9zcmMvYXBwL2NvbXBvbmVudC9oZXJvL2hlcm9lcy5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRjovanMvcXVpY2tzdGFydC9zcmMvYXBwL2NvbXBvbmVudC9oZXJvL2hlcm9lcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==