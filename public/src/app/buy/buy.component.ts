import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  coins: any;

  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    this.grabCoins();
    console.log('Your coins', this.coins);
  }
  onBuy(){
    this.addCoins(1);
    this.grabCoins();
    console.log('New Balance:', this.coins);
  }
  // get function from shinto service
  grabCoins(){
    this.coins = this._shinto.getCoin();
  }
  addCoins(val){
    this._shinto.addToCoin(val);
  }

}
