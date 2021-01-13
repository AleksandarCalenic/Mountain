import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiResorts } from '../model/skiresorts';
import { map } from 'rxjs/operators';
import { Mountain } from '../model/mountain';

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

}
