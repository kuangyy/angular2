import { MottoComponent } from './motto.component';

export const routes = [
  { path: '', children: [
    { path: '', component: MottoComponent },
    // { path: 'motto-detail', loadChildren: './+motto-detail#ChildDetailModule' }
  ]},
];
