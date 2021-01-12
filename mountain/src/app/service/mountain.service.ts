import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiResorts } from '../model/skiresorts';
import { map } from 'rxjs/operators';

const baseurl = "http://localhost:3000/api/skiresorts/";

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  constructor(private http: HttpClient) { }

  getResourts():Observable<SkiResorts[]>{
    return this.http.get(baseurl).pipe(map(x => {
      return x as Array<SkiResorts>
    }))
  }

}
