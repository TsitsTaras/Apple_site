import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ColorConfigMap } from 'src/app/pages/iphone/config/iphone.config';
import { HttpService } from 'src/app/services/http.service';
import { ParsColorsToString } from 'src/app/share/enums/colors.enum';
import { ParsSizesToString } from '../../enum/apple-watch.enum';
import { AppleWatch } from '../../models/apple-watch.model';

@Component({
  selector: 'app-apple-watch-details',
  templateUrl: './apple-watch-details.component.html',
  styleUrls: ['./apple-watch-details.component.scss'],
})
export class AppleWatchDetailsComponent implements OnInit {
  appleWatchDetails: AppleWatch = {} as AppleWatch;
  appleWatchColorsMap: { [key: number]: string } = ColorConfigMap;
  activeIndex: number | null = null;
  activesIndex: number | null = null;
  colorName = '';
  sizeName = '';
  parsColorToString = ParsColorsToString;
  parsSizeToString = ParsSizesToString;

  constructor(
    private service: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const appleWatchId = params['id'];
      this.service
        .getAppleWatchById(appleWatchId)
        .subscribe((res: AppleWatch) => {
          this.appleWatchDetails = res;
          this.colorName =
            ParsColorsToString[this.appleWatchDetails.params.color[0]];
          this.sizeName =
            ParsSizesToString[this.appleWatchDetails.params.size[0]];
          console.log(res);
        });
    });
  }

  onActiveColor(i: number) {
    this.activeIndex = i;
  }
  onActiveSize(i: number) {
    this.activesIndex = i;
  }
}
