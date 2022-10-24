import { Component, OnInit } from '@angular/core';
import { macRamFilter, macSddFilter } from '../../config/mac.config';
import { HttpService } from '../../../../services/http.service';
import { Mac } from '../../models/mac.model';
import { MemoryMap } from 'src/app/share/enums/memorys.enum';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss'],
})
export class MacComponent implements OnInit {
  macList: Mac[] = [];
  macRamFilter = macRamFilter;
  macSsdFilter = macSddFilter;
  filterRam: MemoryMap[] = [];
  filterSsd: MemoryMap[] = [];
  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.service.getMacs().subscribe((res: Mac[]) => {
      this.macList = res;
    });
  }
  onRamChange(value: MemoryMap) {
    const isRam = this.filterRam.find((el) => el === value);
    if (isRam) {
      this.filterRam = this.filterRam.filter((el) => el !== value);
    } else {
      this.filterRam = [...this.filterRam, value];
    }
  }
  onSsdChange(value: MemoryMap) {
    const isSsd = this.filterSsd.find((el) => el === value);
    if (isSsd) {
      this.filterSsd = this.filterSsd.filter((el) => el !== value);
    } else {
      this.filterSsd = [...this.filterSsd, value];
    }
  }
}
