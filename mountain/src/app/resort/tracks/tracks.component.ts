import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tracks } from 'src/app/model/tracks';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.sass']
})
export class TracksComponent implements OnInit {

  @Input() tracks: Tracks[];
  @Output() sortChange = new EventEmitter();
  sortCriteria: string;

  constructor() { }

  ngOnInit(): void {

  }

  changeSort(){
    this.sortChange.emit({"sort": this.sortCriteria});
  }
  
}
