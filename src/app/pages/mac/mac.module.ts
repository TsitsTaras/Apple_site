import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacComponent } from './components/mac-list/mac.component';
import { MacCardComponent } from './components/mac-card/mac-card.component';
import { FilterMacPipe } from 'src/app/pipes/filter-mac.pipe';
import { ShareModule } from 'src/app/share/share.module';
import { MacRouting } from './routing/mac.routing';
import { MacDetailsComponent } from './components/mac-details/mac-details.component';

@NgModule({
  declarations: [MacComponent, MacCardComponent, FilterMacPipe, MacDetailsComponent],
  imports: [CommonModule, ShareModule, MacRouting],
})
export class MacModule {}
