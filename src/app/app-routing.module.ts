import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'iphone',
    loadChildren: () =>
      import('./pages/iphone/iphone.module').then((m) => m.IphoneModule),
  },
  {
    path: 'mac',
    loadChildren: () =>
      import('./pages/mac/mac.module').then((m) => m.MacModule),
  },
  {
    path: 'apple_watch',
    loadChildren: () =>
      import('./pages/apple-watch/apple-watch.module').then(
        (m) => m.AppleWatchModule
      ),
  },
  {
    path: 'ipad',
    loadChildren: () =>
      import('./pages/ipad/ipad.module').then((m) => m.IpadModule),
  },
  {
    path: 'airpods',
    loadChildren: () =>
      import('./pages/airpods/airpods.module').then((m) => m.AirpodsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
