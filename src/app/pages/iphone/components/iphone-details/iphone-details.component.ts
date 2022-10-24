import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { ParsMemorysToString } from 'src/app/share/enums/memorys.enum';
import { ColorConfigMap } from '../../config/iphone.config';
import { Iphone } from '../../models/iphone.model';

@Component({
  selector: 'app-iphone-details',
  templateUrl: './iphone-details.component.html',
  styleUrls: ['./iphone-details.component.scss'],
})
export class IphoneDetailsComponent implements OnInit {
  iphoneDetails: Iphone = {} as Iphone;
  iphoneColorsMap: { [key: number]: string } = ColorConfigMap;
  activeIndex: number | null = null;
  activesIndex: number | null = null;
  colorName = '';
  memoryName = '';
  parsColorToString = ParsColorsToString;
  parsMemorysToString = ParsMemorysToString;

  constructor(
    private service: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const iphoneId = params['id'];
      this.service.getIphoneById(iphoneId).subscribe((res: Iphone) => {
        this.iphoneDetails = res;
        (this.colorName =
          ParsColorsToString[this.iphoneDetails.params.color[0]]),
          (this.memoryName =
            ParsMemorysToString[this.iphoneDetails.params.memory[0]]),
          console.log(res);
      });
    });
  }

  onActiveColor(i: number) {
    this.activeIndex = i;
  }
  onActiveMemory(i: number) {
    this.activesIndex = i;
  }
}
