import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {MatchApiService} from '../../shared/match-api.service';
import {ActivatedRoute} from '@angular/router';
import {items} from '../../../shared/data/items';
import {SharedService} from '../../../shared/shared.service';
import Match = match.Match;
import {MatchItemComponent} from '../item/match-item.component';
import {PlayerComponent} from '../../../shared/components/player/player.component';

@Component({
  templateUrl: './match-overview.component.html'
})
export class MatchOverviewComponent implements OnInit {
  matchOverview$: Observable<Match>;
  matchId: number;
  items = items;
  columns = ['match_id', {component: PlayerComponent}, 'player_slot', 'ability_targets'];

  constructor(private matchApiService: MatchApiService, private route: ActivatedRoute, public sharedService: SharedService) {

  }

  ngOnInit() {
    this.matchId = this.route.parent.snapshot.params['match'];
    this.matchOverview$ = this.matchApiService.getSingleMatch(this.matchId);
  }

}
