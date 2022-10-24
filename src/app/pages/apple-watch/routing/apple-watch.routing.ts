import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppleWatchDetailsComponent } from '../component/apple-watch-details/apple-watch-details.component';
import { AppleWatchComponent } from '../component/apple-watch-list/apple-watch.component';
const watchRoutes: Routes = [
  {
    path: '',
    component: AppleWatchComponent,
  },
  {
    path: 'apple_watch/:id',
    component: AppleWatchDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(watchRoutes)],
  exports: [RouterModule],
})
export class AppleWatchRouting {}
