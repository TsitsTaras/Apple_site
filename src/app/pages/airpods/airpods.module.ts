import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirpodsComponent } from './components/airpods-list/airpods.component';
import { AirpodsRouting } from './routing/airpods.routing';
import { ShareModule } from 'src/app/share/share.module';
import { AirpodsCardComponent } from './components/airpods-card/airpods-card.component';
import { AirpodsDetailsComponent } from './components/airpods-details/airpods-details.component';
import { FilterAirpodsPipe } from 'src/app/pipes/filter-airpods.pipe';

@NgModule({
  declarations: [
    AirpodsComponent,
    AirpodsCardComponent,
    AirpodsDetailsComponent,
    FilterAirpodsPipe,
  ],
  imports: [CommonModule, AirpodsRouting, ShareModule],
})
export class AirpodsModule {}
