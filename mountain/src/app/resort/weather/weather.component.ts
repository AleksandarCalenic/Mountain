import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/model/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  @Input() weather: Weather[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
