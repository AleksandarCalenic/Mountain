import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracks } from 'src/app/model/tracks';
import { MountainService } from 'src/app/service/mountain.service';

@Component({
  selector: 'app-resort-tabs',
  templateUrl: './resort-tabs.component.html',
  styleUrls: ['./resort-tabs.component.sass']
})
export class ResortTabsComponent implements OnInit {

  active = 1;
  id: number;
  tracks: Tracks[];

  constructor(private service: MountainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.getTracks();
    })
  }

  getTracks(): void{
    this.service.getTracks(this.id).subscribe(x => {
      this.tracks = x;
    })
  }

  updateTracks(value: string): void{
    this.service.getTracks(this.id, value).subscribe(x =>{
      this.tracks = x;
      console.log(this.tracks);
    })
  }

}
