import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Skipass } from 'src/app/model/skipass';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from 'src/app/model/reservation';


@Component({
  selector: 'app-skipass',
  templateUrl: './skipass.component.html',
  styleUrls: ['./skipass.component.sass']
})
export class SkipassComponent implements OnInit {

  @Input() skipass: Skipass[];
  model: NgbDateStruct;
  reservation: Reservation = new Reservation();
  @Output() newReservation = new EventEmitter<Reservation>();

  constructor() { }

  ngOnInit(): void {
  }

  changePrice(): void{
    if(this.reservation.from && this.reservation.to){
      let days = this.reservation.calculateDateDifference();
      if(days < 1 || days > 7){
        this.reservation.price = null;
      }
      for (let price of this.skipass){
        if(days == price.duration){
          this.reservation.price = price.price;
        }
      }
    }
  }

  buttonSubmit() {
    this.newReservation.emit(this.reservation);
  }

}
