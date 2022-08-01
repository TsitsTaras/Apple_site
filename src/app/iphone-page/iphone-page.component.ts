import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-iphone-page',
  templateUrl: './iphone-page.component.html',
  styleUrls: ['./iphone-page.component.scss'],
})
export class IphonePageComponent implements OnInit {
  iphoneList: any = [];

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.service.getIphones().subscribe((res: any) => {
      this.iphoneList = res;
    });
  }
}
