import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {

  constructor(private _http: HttpClient) { }

  coins = 0;
  // function to get value of coins
  getCoin() {
    return this.coins;
  }

  addToCoin(val){
    this.coins = this.coins + val;
  }

}
