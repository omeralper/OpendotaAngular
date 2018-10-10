import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../../shared/shared.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchApiService {

  private data: Object;
  private observable: Observable<any>;

  // private dataObs$ = new ReplaySubject(1);
  constructor(private httpClient: HttpClient, private sharedService: SharedService) {

  }

  getProMatches() {
    return this.httpClient.get(this.sharedService.getProMatchesApi());
  }

  getPublicMatches() {
    return this.httpClient.get(this.sharedService.getPublicMatchesApi());
  }

  getSingleMatch(matchId: number, forceRefresh: boolean = false) {
    if (this.data) {
      // if `data` is available just return it as `Observable`
      return Observable.of(this.data);
    } else if (this.observable) {
      // if `this.observable` is set then the request is in progress
      // return the `Observable` for the ongoing request
      return this.observable;
    } else {
      // create the request, store the `Observable` for subsequent subscribers
      this.observable = this.httpClient.get(this.sharedService.getSingleMatchApi() + '/' + matchId)
        .map(response => {
          this.observable = null;
          this.data = response;
          return response;
          // if(response.status === 400) {
          //   return "FAILURE";
          // } else if(response.status === 200) {
          //   this.data = new Object(response.json());
          //   return response;
          // }
        })
        .share();
      return this.observable;
    }

    // if (!this.dataObs$.observers.length || forceRefresh) {
    //   this.httpClient.get(this.sharedService.getSingleMatchApi() + '/' + matchId).subscribe(
    //     data => this.dataObs$.next(data),
    //     error => {
    //       this.dataObs$.error(error);
    //       // Recreate the Observable as after Error we cannot emit data anymore
    //       this.dataObs$ = new ReplaySubject(1);
    //     }
    //   );
    // }
    //
    // return this.dataObs$;
  }

}

