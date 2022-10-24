import { Component, Input, OnInit } from '@angular/core';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { AppleWatch } from '../../models/apple-watch.model';

@Component({
  selector: 'app-apple-watch-card',
  templateUrl: './apple-watch-card.component.html',
  styleUrls: ['./apple-watch-card.component.scss'],
})
export class AppleWatchCardComponent implements OnInit {
  constructor() {}
  @Input() appleWatch: AppleWatch = {} as AppleWatch;
  colorName = '';
  ngOnInit(): void {
    this.colorName = ParsColorsToString[this.appleWatch.params.color[0]];
  }
}
