import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ColorMap } from 'src/app/share/enums/colors.enum';
import {
  appleWatchColorsFilter,
  appleWatchSizeFilter,
} from '../../config/apple-watch.config';
import { SizeMap } from '../../enum/apple-watch.enum';
import { AppleWatch } from '../../models/apple-watch.model';

@Component({
  selector: 'app-apple-watch',
  templateUrl: './apple-watch.component.html',
  styleUrls: ['./apple-watch.component.scss'],
})
export class AppleWatchComponent implements OnInit {
  appleWatchList: AppleWatch[] = [];
  appleWatchColorsFilter = appleWatchColorsFilter;
  appleWatchSizeFilter = appleWatchSizeFilter;
  filterColors: ColorMap[] = [];
  filterSize: SizeMap[] = [];

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.service.getAppleWatchs().subscribe((res: AppleWatch[]) => {
      this.appleWatchList = res;
    });
  }
  onColorChange(value: ColorMap) {
    const isColor = this.filterColors.find((el) => el === value);
    if (isColor) {
      this.filterColors = this.filterColors.filter((el) => el !== value);
    } else {
      this.filterColors = [...this.filterColors, value];
    }
  }
  onSizeChange(value: SizeMap) {
    const isSize = this.filterSize.find((el) => el === value);
    if (isSize) {
      this.filterSize = this.filterSize.filter((el) => el !== value);
    } else {
      this.filterSize = [...this.filterSize, value];
    }
  }
}
