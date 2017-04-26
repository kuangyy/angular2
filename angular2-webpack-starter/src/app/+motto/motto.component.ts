import {
  Component, Input,
  OnInit, Output
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { MottoService } from './motto.service';
import { Motto } from './motto.model';
import { FormsModule } from '@angular/forms';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'motto-list',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    FormsModule,
    MottoService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./motto.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './motto.component.html'
})
export class MottoComponent implements OnInit {

  // a bug that A template reference variable in template must declare in component otherwise compile error
  theForm: any;

  editPanel = false;

  mottoList: Motto[];

  @Input() motto: Motto;

  errorMessage: string;

  // TypeScript public modifiers
  constructor(private mottoSerivce: MottoService) {
  }

  public ngOnInit() {
    console.log('init `Motto` component');
    this.getList();
  }

  public getList() {
    this.mottoSerivce.getList().subscribe(
      data => {
        this.mottoList = data.list
      },
      error => console.error(error)
    );
  }

  public showEditPanel(motto?: Motto) {
    this.motto = motto ? motto : new Motto();
    this.editPanel = true;
  }

  public hideEditPanel() {
    this.editPanel = false;
  }

  public delete(id: number) {
    this.mottoSerivce.delete(id).subscribe(
      data => this.errorMessage = data.message,
      error => console.error(error)
    );
  }


  public submitMotto() {
    if (this.motto.id) {
      this.mottoSerivce.update(this.motto).subscribe(
        data => {
          if (data.message) {
            this.getList();
          }
        },
        error => console.error(error)
      );
    } else {
      this.mottoSerivce.add(this.motto).subscribe(
        data => {
          if (data.message) {
            this.getList();
          }
        },
        error => console.error(error)
      );
    }
  }


}
