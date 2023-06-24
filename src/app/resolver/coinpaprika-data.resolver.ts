import {inject } from '@angular/core';
import { CoinpaprikaService } from '../services/coinpaprika.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

export const CoinpaprikaDataResolver:ResolveFn<any>=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
    return inject(CoinpaprikaService).getListCoin()
}
