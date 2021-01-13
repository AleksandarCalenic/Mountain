import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resort-tabs',
  templateUrl: './resort-tabs.component.html',
  styleUrls: ['./resort-tabs.component.sass']
})
export class ResortTabsComponent implements OnInit {

  active = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
