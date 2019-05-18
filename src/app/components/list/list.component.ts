import { Component, OnInit } from '@angular/core';
import { CoinDataService } from 'src/app/services/coin-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coins: Object;
  constructor(private coinDataService: CoinDataService) {}

  ngOnInit() {
    this.coinDataService.getData().subscribe(coinData => {
      this.coins = coinData;
    });
  }
}
