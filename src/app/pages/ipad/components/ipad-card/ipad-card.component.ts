import { Component, Input, OnInit } from '@angular/core';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { Ipad } from '../../models/ipad.models';

@Component({
  selector: 'app-ipad-card',
  templateUrl: './ipad-card.component.html',
  styleUrls: ['./ipad-card.component.scss'],
})
export class IpadCardComponent implements OnInit {
  @Input() ipad: Ipad = {} as Ipad;
  colorName = '';

  constructor() {}

  ngOnInit(): void {
    this.colorName = ParsColorsToString[this.ipad.params.color[0]];
  }
}
