import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ColorMap } from 'src/app/share/enums/colors.enum';
import { MemoryMap } from 'src/app/share/enums/memorys.enum';
import {
  ipadColorsFilter,
  ipadMemoryFilter,
} from '../../ipad-config/ipad.config';
import { Ipad } from '../../models/ipad.models';

@Component({
  selector: 'app-ipad',
  templateUrl: './ipad.component.html',
  styleUrls: ['./ipad.component.scss'],
})
export class IpadComponent implements OnInit {
  ipadList: Ipad[] = [];
  ipadColorsFilter = ipadColorsFilter;
  ipadMemoryFilter = ipadMemoryFilter;
  filterColors: ColorMap[] = [];
  filterMemory: MemoryMap[] = [];

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.service.getIpads().subscribe((res: Ipad[]) => {
      this.ipadList = res;
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
