/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './heroes.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../../app/pipe/awesome.pipe';
import * as import3 from '@angular/common';
import * as import4 from '../../../../app/component/hero/heroes.component';
import * as import5 from '../../../../app/service/hero/hero.service';
import * as import6 from '@angular/router';
const styles_HeroesComponent:any[] = [import0.styles];
export const RenderType_HeroesComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_HeroesComponent,
  data: {}
}
);
function View_HeroesComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),11,'li',([] as any[]),[[
        2,
        'selected',
        (null as any)
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onSelect(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'badge'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    import1.ɵppd(1),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'delete'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        co.delete(v.context.$implicit);
        const pd_0:any = ((<any>$event.stopPropagation()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['x'])),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = (v.context.$implicit === co.selectedHero);
    ck(v,0,0,currVal_0);
    const currVal_1:any = v.context.$implicit.id;
    ck(v,3,0,currVal_1);
    const currVal_2:any = import1.ɵunv(v,6,0,ck(v,7,0,import1.ɵnov((<any>v.parent),0),v.context.$implicit.name));
    ck(v,6,0,currVal_2);
  });
}
function View_HeroesComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),8,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n    ',
      ' is my hero\n  '
    ]
    )),
    import1.ɵppd(1),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.gotoDetail()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['View Details'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = import1.ɵunv(v,3,0,ck(v,4,0,import1.ɵnov((<any>v.parent),1),co.selectedHero.name));
    ck(v,3,0,currVal_0);
  });
}
export function View_HeroesComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵpid(0,import2.AwesomePipe,([] as any[])),
    import1.ɵpid(0,import3.UpperCasePipe,([] as any[])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['My Heroes'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),9,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Hero name:'])),
    (l()(),import1.ɵted((null as any),[' '])),
      (l()(),import1.ɵeld(0,[[
        'heroName',
        1
      ]
    ],(null as any),0,'input',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import4.HeroesComponent = v.component;
      if (('click' === en)) {
        co.add(import1.ɵnov(v,10).value);
        const pd_0:any = ((<any>(import1.ɵnov(v,10).value = '')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    Add\n  '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'ul',[[
        'class',
        'heroes'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_HeroesComponent_1)),
    import1.ɵdid(401408,(null as any),0,import3.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_HeroesComponent_2)),
    import1.ɵdid(8192,(null as any),0,import3.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import4.HeroesComponent = v.component;
    const currVal_0:any = co.heroes;
    ck(v,19,0,currVal_0);
    const currVal_1:any = co.selectedHero;
    ck(v,23,0,currVal_1);
  },(null as any));
}
function View_HeroesComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'my-heroes',([] as any[]),(null as any),(null as any),(null as any),View_HeroesComponent_0,RenderType_HeroesComponent)),
    import1.ɵdid(57344,(null as any),0,import4.HeroesComponent,[
      import5.HeroService,
      import6.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const HeroesComponentNgFactory:import1.ComponentFactory<import4.HeroesComponent> = import1.ɵccf('my-heroes',import4.HeroesComponent,View_HeroesComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovanMvcXVpY2tzdGFydC9zcmMvYXBwL2NvbXBvbmVudC9oZXJvL2hlcm9lcy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRjovanMvcXVpY2tzdGFydC9zcmMvYXBwL2NvbXBvbmVudC9oZXJvL2hlcm9lcy5jb21wb25lbnQudHMiLCJuZzovLy9GOi9qcy9xdWlja3N0YXJ0L3NyYy9hcHAvY29tcG9uZW50L2hlcm8vaGVyb2VzLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRjovanMvcXVpY2tzdGFydC9zcmMvYXBwL2NvbXBvbmVudC9oZXJvL2hlcm9lcy5jb21wb25lbnQudHMuSGVyb2VzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgyPk15IEhlcm9lczwvaDI+XG48ZGl2PlxuICA8bGFiZWw+SGVybyBuYW1lOjwvbGFiZWw+IDxpbnB1dCAjaGVyb05hbWUgLz5cbiAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKGhlcm9OYW1lLnZhbHVlKTsgaGVyb05hbWUudmFsdWU9JydcIj5cbiAgICBBZGRcbiAgPC9idXR0b24+XG48L2Rpdj5cbjx1bCBjbGFzcz1cImhlcm9lc1wiPlxuICA8bGkgKm5nRm9yPVwibGV0IGhlcm8gb2YgaGVyb2VzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGhlcm8pXCJcbiAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJoZXJvID09PSBzZWxlY3RlZEhlcm9cIj5cbiAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3toZXJvLmlkfX08L3NwYW4+XG4gICAgPHNwYW4+e3toZXJvLm5hbWUgfCBhd2Vzb21lfX08L3NwYW4+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiXG4gICAgICAoY2xpY2spPVwiZGVsZXRlKGhlcm8pOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj54PC9idXR0b24+XG4gIDwvbGk+XG48L3VsPlxuPGRpdiAqbmdJZj1cInNlbGVjdGVkSGVyb1wiPlxuICA8aDI+XG4gICAge3tzZWxlY3RlZEhlcm8ubmFtZSB8IHVwcGVyY2FzZX19IGlzIG15IGhlcm9cbiAgPC9oMj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwiZ290b0RldGFpbCgpXCI+VmlldyBEZXRhaWxzPC9idXR0b24+XG48L2Rpdj5cbiIsIjxteS1oZXJvZXM+PC9teS1oZXJvZXM+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DUUU7UUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQWdDO1FBQUE7UUFBQTtNQUFBO01BQWhDO0lBQUE7SUFDNkM7TUFDM0M7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFvQjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQWtCO0lBQ3RDO0lBQU07TUFBQTtNQUFBO0lBQUE7SUFBQTtnQkFBQTtJQUE4QjtNQUNwQztRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQ0U7UUFBQTtRQUFBO1FBQUE7TUFBQTtNQURGO0lBQUE7SUFDbUQ7SUFBVTs7OztJQUozRDtJQURKLFNBQ0ksU0FESjtJQUVzQjtJQUFBO0lBQ2Q7SUFBQTs7Ozs7SUFLVjtJQUEwQjtJQUN4QjtJQUFJO01BQUE7TUFBQTtJQUFBO0lBQUE7Z0JBQUE7SUFFQztNQUNMO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQVE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO0lBQStCO0lBQXFCOzs7O0lBSGhEO0lBQUE7Ozs7Ozs7SUFqQk47SUFBSTtJQUFjO0lBQ2xCO0lBQUs7SUFDSDtJQUFPO0lBQWtCO01BQUM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFtQjtNQUM3QztRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFRO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO0lBQXlEO0lBRWhEO0lBQ0w7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1CO0lBQ2pCO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBTUs7SUFDRjtJQUNMO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFLTTs7OztJQWJBO0lBQUosVUFBSSxTQUFKO0lBUUc7SUFBTCxVQUFLLFNBQUw7Ozs7O0lDaEJBO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
