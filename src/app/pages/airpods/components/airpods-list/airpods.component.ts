import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ColorMap } from 'src/app/share/enums/colors.enum';
import {
  airpodsColorsFilter,
  airpodsManufactureFilter,
} from '../../config/airpods.config';
import { ManufactureMap } from '../../enum/airpods.enum';
import { Airpods } from '../../models/airpods.model';

@Component({
  selector: 'app-airpods',
  templateUrl: './airpods.component.html',
  styleUrls: ['./airpods.component.scss'],
})
export class AirpodsComponent implements OnInit {
  airpodsList: Airpods[] = [];
  airpodsColorsFilter = airpodsColorsFilter;
  airpodsManufactureFilter = airpodsManufactureFilter;
  filterColors: ColorMap[] = [];
  filterManufacture: ManufactureMap[] = [];

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.service.getAirpods().subscribe((res: Airpods[]) => {
      this.airpodsList = res;
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
  onManufactureChange(value: ManufactureMap) {
    const isManufacture = this.filterManufacture.find((el) => el === value);
    if (isManufacture) {
      this.filterManufacture = this.filterManufacture.filter(
        (el) => el !== value
      );
    } else {
      this.filterManufacture = [...this.filterManufacture, value];
    }
  }
}
