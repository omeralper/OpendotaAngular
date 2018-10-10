import {Injectable} from '@angular/core';


@Injectable()
export class SharedService {

  readonly openDataUrl: string = 'https://api.opendota.com/';
  readonly proMatches: string = 'api/proMatches';
  readonly publicMatches: string = 'api/publicMatches';
  readonly singleMatch: string = 'api/matches';
  readonly heroes: string = 'apps/dota2/images/heroes/';
  readonly items: string = 'apps/dota2/images/items/';
  readonly abilities: string = 'apps/dota2/images/abilities/';

  getProMatchesApi() {
    return this.openDataUrl + this.proMatches;
  }

  getPublicMatchesApi() {
    return this.openDataUrl + this.publicMatches;
  }

  getSingleMatchApi() {
    return this.openDataUrl + this.singleMatch;
  }

  getHeroApi() {
    return this.openDataUrl + this.heroes;
  }

  getItemApi() {
    return this.openDataUrl + this.items;
  }

  getAbilityApi() {
    return this.openDataUrl + this.abilities;
  }
}

