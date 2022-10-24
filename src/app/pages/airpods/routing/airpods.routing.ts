import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirpodsDetailsComponent } from '../components/airpods-details/airpods-details.component';
import { AirpodsComponent } from '../components/airpods-list/airpods.component';
const airpodsRoutes: Routes = [
  {
    path: '',
    component: AirpodsComponent,
  },
  {
    path: 'airpods/:id',
    component: AirpodsDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(airpodsRoutes)],
  exports: [RouterModule],
})
export class AirpodsRouting {}
