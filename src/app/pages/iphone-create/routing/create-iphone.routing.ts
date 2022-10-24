import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateIphoneComponent } from '../components/create-iphone/create-iphone.component';

const iphoneCreateRoutes: Routes = [
  { path: 'create/iphone', component: CreateIphoneComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(iphoneCreateRoutes)],
  exports: [RouterModule],
})
export class CreateIphoneRouting {}
