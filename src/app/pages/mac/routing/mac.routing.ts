import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacDetailsComponent } from '../components/mac-details/mac-details.component';
import { MacComponent } from '../components/mac-list/mac.component';

const macRoutes: Routes = [
  {
    path: '',
    component: MacComponent,
  },
  {
    path: 'mac/:id',
    component: MacDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(macRoutes)],
  exports: [RouterModule],
})
export class MacRouting {}
