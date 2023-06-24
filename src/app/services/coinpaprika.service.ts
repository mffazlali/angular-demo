import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CoinpaprikaService {
    baseUrl = 'https://api.coinpaprika.com'
    version = 'v1'
    constructor(@Inject(HttpClient) private httpClient: HttpClient) {}

    getListCoin() {
        return this.httpClient.get(`${this.baseUrl}/${this.version}/coins`)
    }
}
