import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IphoneDetailsComponent } from '../components/iphone-details/iphone-details.component';
import { IphoneComponent } from '../components/iphone-list/iphone.component';
const iphoneRoutes: Routes = [
  {
    path: '',
    component: IphoneComponent,
  },
  { path: 'iphone/:id', component: IphoneDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(iphoneRoutes)],
  exports: [RouterModule],
})
export class IphoneRouting {}
