import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ColorConfigMap } from 'src/app/pages/iphone/config/iphone.config';
import { HttpService } from 'src/app/services/http.service';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { ParsMemorysToString } from 'src/app/share/enums/memorys.enum';
import { Mac } from '../../models/mac.model';

@Component({
  selector: 'app-mac-details',
  templateUrl: './mac-details.component.html',
  styleUrls: ['./mac-details.component.scss'],
})
export class MacDetailsComponent implements OnInit {
  macDetails: Mac = {} as Mac;
  macColorsMap: { [key: number]: string } = ColorConfigMap;
  activeIndex: number | null = null;
  activeRamIndex: number | null = null;
  activeSsdIndex: number | null = null;

  colorName = '';
  parsColorToString = ParsColorsToString;
  parsRamToString = ParsMemorysToString;
  parsSsdToString = ParsMemorysToString;

  constructor(
    private service: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const macId = params['id'];
      this.service.getMacById(macId).subscribe((res: Mac) => {
        this.macDetails = res;
        (this.colorName = ParsColorsToString[this.macDetails.params.color[0]]),
          console.log(res);
      });
    });
  }
  onActiveColor(i: number) {
    this.activeIndex = i;
  }
  onActiveRam(i: number) {
    this.activeRamIndex = i;
  }
  onActiveSsd(i: number) {
    this.activeSsdIndex = i;
  }
}
