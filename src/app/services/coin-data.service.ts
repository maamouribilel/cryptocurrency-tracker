import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoinDataService {
  constructor(private http: HttpClient) {}

  getData() {
    // tslint:disable-next-line: max-line-length
    return this.http.get(
      'https://coingecko.p.rapidapi.com/coins/markets?page=1&sparkline=false&per_page=100&order=market_cap_desc&vs_currency=usd',
      {
        headers: {
          'X-RapidAPI-Host': 'API HOST HERE!',
          'X-RapidAPI-Key': 'API KEY HERE!'
        }
      }
    );
  }
}
