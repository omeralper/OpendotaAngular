import {Component, OnInit} from '@angular/core';
import {MatchApiService} from '../shared/match-api.service';
import {Observable} from 'rxjs/index';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './single-match.html'
})
export class SingleMatchComponent implements OnInit {
  matchOverview$: Observable<Object>;
  matchId: number;

  constructor(private matchApiService: MatchApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.matchId = this.route.snapshot.params['match'];
    this.matchOverview$ = this.matchApiService.getSingleMatch(this.matchId);
  }

}
