import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpadDetailsComponent } from '../components/ipad-details/ipad-details.component';
import { IpadComponent } from '../components/ipad-list/ipad.component';
const ipadRoutes: Routes = [
  {
    path: '',
    component: IpadComponent,
  },
  {
    path: 'ipad/:id',
    component: IpadDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(ipadRoutes)],
  exports: [RouterModule],
})
export class IpadRouting {}
