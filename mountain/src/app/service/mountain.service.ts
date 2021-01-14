import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiResorts } from '../model/skiresorts';
import { map } from 'rxjs/operators';
import { Mountain } from '../model/mountain';
import { Tracks } from '../model/tracks';
import { Weather } from '../model/weather';


const baseurl = "http://localhost:3000/api/skiresorts/";

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  constructor(private http: HttpClient) { }

  getResorts():Observable<SkiResorts[]>{
    return this.http.get(baseurl).pipe(map(x => {
      return x as Array<SkiResorts>
    }))
  }

  getMountain(id?: number): Observable<Mountain>{
    return this.http.get(baseurl + id).pipe(map(x => {
      return new Mountain(x);
    }))
  }

  getTracks(id: number, params?: any): Observable<Tracks[]>{
    let queryParams = {};
    if (params){
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort || '')
      }
    }
    return this.http.get(baseurl + id + "/tracks", queryParams).pipe(map(x =>{
      return x as Array<Tracks>
    }))
  }

  getWeather(id: number): Observable<Weather[]>{
    return this.http.get(baseurl + id + '/weather').pipe(map(x =>{
      return x as Array<Weather>
    }))
  }

}
