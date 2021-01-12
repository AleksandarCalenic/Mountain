import { Component, OnInit } from '@angular/core';
import { SkiResorts } from 'src/app/model/skiresorts';
import { MountainService } from 'src/app/service/mountain.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  mountain: SkiResorts[];

  constructor(private service: MountainService) { }

  ngOnInit(): void {
    this.getResourts();
  }

  getResourts(): void{
    this.service.getResourts().subscribe(x => {
      this.mountain = x;
      console.log(this.mountain);
    })
  }

}
