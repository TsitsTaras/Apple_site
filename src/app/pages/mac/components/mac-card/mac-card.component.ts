import { Component, Input, OnInit } from '@angular/core';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { Mac } from '../../models/mac.model';

@Component({
  selector: 'app-mac-card',
  templateUrl: './mac-card.component.html',
  styleUrls: ['./mac-card.component.scss'],
})
export class MacCardComponent implements OnInit {
  @Input() mac: Mac = {} as Mac;
  colorName = '';
  constructor() {}

  ngOnInit(): void {
    this.colorName = ParsColorsToString[this.mac.params.color[0]];
  }
}
