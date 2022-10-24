import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpadComponent } from './components/ipad-list/ipad.component';
import { IpadRouting } from './routing/ipad.routing';
import { IpadDetailsComponent } from './components/ipad-details/ipad-details.component';
import { IpadCardComponent } from './components/ipad-card/ipad-card.component';
import { FilterIpadPipe } from 'src/app/pipes/filter-ipad.pipe';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [
    IpadComponent,
    IpadDetailsComponent,
    IpadCardComponent,
    FilterIpadPipe,
  ],
  imports: [CommonModule, IpadRouting, ShareModule],
})
export class IpadModule {}
