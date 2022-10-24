import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iphone } from '../pages/iphone/models/iphone.model';
import { Mac } from '../pages/mac/models/mac.model';
import { Ipad } from '../pages/ipad/models/ipad.models';
import { Airpods } from '../pages/airpods/models/airpods.model';
import { AppleWatch } from '../pages/apple-watch/models/apple-watch.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getIphones(): Observable<Iphone[]> {
    return this.http.get<Iphone[]>('http://localhost:3000/iphones');
  }
  getIphoneById(id: Iphone): Observable<Iphone> {
    return this.http.get<Iphone>('http://localhost:3000/iphones/' + id);
  }
  getMacs(): Observable<Mac[]> {
    return this.http.get<Mac[]>('http://localhost:3000/macs');
  }
  getMacById(id: Mac): Observable<Mac> {
    return this.http.get<Mac>('http://localhost:3000/macs/' + id);
  }
  getAppleWatchs(): Observable<AppleWatch[]> {
    return this.http.get<AppleWatch[]>('http://localhost:3000/appleWatchs');
  }
  getAppleWatchById(id: AppleWatch): Observable<AppleWatch> {
    return this.http.get<AppleWatch>('http://localhost:3000/appleWatchs/' + id);
  }
  getIpads(): Observable<Ipad[]> {
    return this.http.get<Ipad[]>('http://localhost:3000/ipads');
  }
  getIpadById(id: Ipad): Observable<Ipad> {
    return this.http.get<Ipad>('http://localhost:3000/ipads/' + id);
  }
  getAirpods(): Observable<Airpods[]> {
    return this.http.get<Airpods[]>('http://localhost:3000/airpods');
  }
  getAirpodsById(id: Airpods): Observable<Airpods> {
    return this.http.get<Airpods>('http://localhost:3000/airpods/' + id);
  }

  createIphone(data: Iphone): Observable<Iphone> {
    return this.http.post<Iphone>('http://localhost:3000/iphones/', data);
  }
}
