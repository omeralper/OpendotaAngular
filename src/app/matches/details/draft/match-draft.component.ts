import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {MatchApiService} from '../../shared/match-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './match-draft.component.html'
})
export class MatchDraftComponent implements OnInit {
  matchOverview$: Observable<Object>;
  matchId: number;

  constructor(private matchApiService: MatchApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.matchId = this.route.parent.snapshot.params['match'];
    this.matchOverview$ = this.matchApiService.getSingleMatch(this.matchId);
  }

}
