import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AirpodsPageComponent } from "./airpods-page/airpods-page.component";
import { AppleWatchPageComponent } from "./apple-watch-page/apple-watch-page.component";
import { IpadPageComponent } from "./ipad-page/ipad-page.component";
import { IphonePageComponent } from "./iphone-page/iphone-page.component";
import { MacPageComponent } from "./mac-page/mac-page.component";


const appRoutes: Routes = [
    {path:'',component:IphonePageComponent},
    {path:'mac',component:MacPageComponent},
    { path: 'apple_watch', component: AppleWatchPageComponent },
    {path:'ipad',component:IpadPageComponent},
    {path:'airpods',component:AirpodsPageComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    
})
export class AppRoutingModule{

}