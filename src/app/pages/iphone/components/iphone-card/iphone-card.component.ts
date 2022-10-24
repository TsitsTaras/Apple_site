import { Component, Input, OnInit } from '@angular/core';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { ColorConfigMap } from '../../config/iphone.config';
import { Iphone } from '../../models/iphone.model';

@Component({
  selector: 'app-iphone-card',
  templateUrl: './iphone-card.component.html',
  styleUrls: ['./iphone-card.component.scss'],
})
export class IphoneCardComponent implements OnInit {
  iphoneColorsMap: { [key: number]: string } = ColorConfigMap;
  activeIndex: number | null = null;
  @Input() iphone: Iphone = {} as Iphone;

  constructor() {}
  ngOnInit() {}
  onActiveColor(i: number) {
    this.activeIndex = i;
  }
}
