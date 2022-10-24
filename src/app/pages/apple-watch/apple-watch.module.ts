import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterAppleWatchPipe } from 'src/app/pipes/filter-apple-watch.pipe';
import { ShareModule } from 'src/app/share/share.module';
import { AppleWatchCardComponent } from './component/apple-watch-card/apple-watch-card.component';
import { AppleWatchComponent } from './component/apple-watch-list/apple-watch.component';
import { AppleWatchRouting } from './routing/apple-watch.routing';
import { AppleWatchDetailsComponent } from './component/apple-watch-details/apple-watch-details.component';

@NgModule({
  declarations: [
    AppleWatchComponent,
    AppleWatchCardComponent,
    FilterAppleWatchPipe,
    AppleWatchDetailsComponent,
  ],
  imports: [CommonModule, AppleWatchRouting, ShareModule],
})
export class AppleWatchModule {}
