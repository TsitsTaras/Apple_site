import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Airpods } from '../../models/airpods.model';

@Component({
  selector: 'app-airpods-details',
  templateUrl: './airpods-details.component.html',
  styleUrls: ['./airpods-details.component.scss'],
})
export class AirpodsDetailsComponent implements OnInit {
  airpodsDetails: Airpods = {} as Airpods;

  constructor(
    private service: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const airpodsId = params['id'];
      this.service.getAirpodsById(airpodsId).subscribe((res: Airpods) => {
        this.airpodsDetails = res;
        console.log(res);
      });
    });
  }
}
