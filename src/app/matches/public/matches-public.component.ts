import {Component, OnInit} from '@angular/core';
import {MatchApiService} from './../shared/match-api.service';
import {Observable} from 'rxjs/index';

@Component({
  templateUrl: './matches-public.component.html'
})
export class MatchesPublicComponent implements OnInit {
  observableMatches: Observable<Object>;

  constructor(private matchApiService: MatchApiService) {

  }

  ngOnInit() {
    this.observableMatches = this.matchApiService.getPublicMatches();
  }

}
