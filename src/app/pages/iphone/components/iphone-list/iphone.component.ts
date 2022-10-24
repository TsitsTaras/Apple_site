import { Component, OnInit } from '@angular/core';
import { Iphone } from '../../models/iphone.model';
import { HttpService } from '../../../../services/http.service';
import { ColorMap } from '../../../../share/enums/colors.enum';
import {
  iphoneColorsFilter,
  iphoneMemoryFilter,
} from '../../config/iphone.config';
import { MemoryMap } from 'src/app/share/enums/memorys.enum';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss'],
})
export class IphoneComponent implements OnInit {
  iphoneList: Iphone[] = [];
  iphoneColorsFilter = iphoneColorsFilter;
  iphoneMemoryFilter = iphoneMemoryFilter;
  filterColors: ColorMap[] = [];
  filterMemory: MemoryMap[] = [];
  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.service.getIphones().subscribe((res: Iphone[]) => {
      this.iphoneList = res;
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
  onMemoryChange(value: MemoryMap) {
    const isMemory = this.filterMemory.find((el) => el === value);
    if (isMemory) {
      this.filterMemory = this.filterMemory.filter((el) => el !== value);
    } else {
      this.filterMemory = [...this.filterMemory, value];
    }
  }
}
