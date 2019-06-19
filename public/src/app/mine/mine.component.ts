import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  coins: any;
  answer = 'Jonte';
  question = {answer: ''};
  constructor(private _shinto: ShintoService) { }

  mineSubmit(){
    if(this.question.answer === this.answer){
      this.addToCoins(1);
      this.grabCoins();
      console.log('Answered correctly', this.coins);
    } else {
      alert('Wompppppppp!');
    }
  }

  ngOnInit() {
    this.grabCoins();
    console.log('Current coins:', this.coins)
  }
  grabCoins(){
    this.coins = this._shinto.getCoin();
  }

  addToCoins(val){
    this._shinto.addToCoin(val);
  }
}
