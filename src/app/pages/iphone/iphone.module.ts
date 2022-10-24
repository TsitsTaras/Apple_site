import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterIphonePipe } from 'src/app/pipes/filter-iphone.pipe';
import { ShareModule } from 'src/app/share/share.module';
import { IphoneCardComponent } from './components/iphone-card/iphone-card.component';
import { IphoneDetailsComponent } from './components/iphone-details/iphone-details.component';
import { IphoneComponent } from './components/iphone-list/iphone.component';
import { IphoneRouting } from './routing/iphone.routing';

@NgModule({
  declarations: [
    IphoneComponent,
    IphoneCardComponent,
    FilterIphonePipe,
    IphoneDetailsComponent,
  ],
  imports: [CommonModule, ShareModule, IphoneRouting],
})
export class IphoneModule {}
