import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mountain } from '../model/mountain';
import { MountainService } from '../service/mountain.service';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.sass']
})
export class ResortComponent implements OnInit {

  id: number;
  mountain: Mountain;

  constructor(private service: MountainService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.getMountain();
    })
  }

  getMountain(): void{
    this.service.getMountain(this.id).subscribe(x => {
      this.mountain = x;
      console.log(this.mountain);
    })
  }

}
