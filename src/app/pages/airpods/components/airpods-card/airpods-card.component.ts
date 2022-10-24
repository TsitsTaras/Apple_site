import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-airpods-card',
  templateUrl: './airpods-card.component.html',
  styleUrls: ['./airpods-card.component.scss'],
})
export class AirpodsCardComponent implements OnInit {
  @Input() airpods: any;

  constructor() {}

  ngOnInit(): void {}
}
