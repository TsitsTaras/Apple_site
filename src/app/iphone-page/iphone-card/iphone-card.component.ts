import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone-card',
  templateUrl: './iphone-card.component.html',
  styleUrls: ['./iphone-card.component.scss'],
})
export class IphoneCardComponent implements OnInit {
  iphoneColorsMap: any = {
    midnight: 'midnight',
    starlight: 'srarlight',
    pink: 'pink',
    blue: 'blue',
    red: 'red',
    graphite: 'graphite',
    silver: 'silver',
    gold: 'gold',
    sierraBlue: 'sierra-blue',
    slpineGreen: 'slpine-green',
    black: 'black',
    white: 'white',
    green: 'green',
    purple: 'purple',
  };
  activeIndex: number | null = null;
  @Input() iphone: any;
  constructor() {}
  ngOnInit(): void {
    console.log(this.iphone);
  }
  onActiveColor(i: number) {
    this.activeIndex = i;
  }
}
