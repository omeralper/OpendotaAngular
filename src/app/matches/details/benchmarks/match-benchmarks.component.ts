import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {MatchApiService} from '../../shared/match-api.service';
import {ActivatedRoute} from '@angular/router';
import {items} from '../../../shared/data/items';

@Component({
  templateUrl: './match-benchmarks.component.html'
})
export class MatchBenchmarksComponent implements OnInit {
  matchOverview$: Observable<Object>;
  matchId: number;
  items = items;

  constructor(private matchApiService: MatchApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.matchId = this.route.parent.snapshot.params['match'];
    this.matchOverview$ = this.matchApiService.getSingleMatch(this.matchId);
  }

}
