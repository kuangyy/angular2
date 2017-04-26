import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './motto.routes';
import { MottoComponent } from './motto.component';
import { DateFormatPipe } from '../pipe/date-format.pipe';

console.log('`Motto` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MottoComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MottoModule {
  public static routes = routes;
}
