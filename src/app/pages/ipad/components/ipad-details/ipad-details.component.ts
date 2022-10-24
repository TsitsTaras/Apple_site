import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ColorConfigMap } from 'src/app/pages/iphone/config/iphone.config';
import { HttpService } from 'src/app/services/http.service';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { ParsMemorysToString } from 'src/app/share/enums/memorys.enum';
import { Ipad } from '../../models/ipad.models';

@Component({
  selector: 'app-ipad-details',
  templateUrl: './ipad-details.component.html',
  styleUrls: ['./ipad-details.component.scss'],
})
export class IpadDetailsComponent implements OnInit {
  ipadDetails: Ipad = {} as Ipad;
  ipadColorsMap: { [key: number]: string } = ColorConfigMap;
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
      const ipadId = params['id'];
      this.service.getIpadById(ipadId).subscribe((res: Ipad) => {
        this.ipadDetails = res;
        (this.colorName = ParsColorsToString[this.ipadDetails.params.color[0]]),
          (this.memoryName =
            ParsMemorysToString[this.ipadDetails.params.memory[0]]),
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
