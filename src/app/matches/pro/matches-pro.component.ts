import {Component, OnInit} from '@angular/core';
import {MatchApiService} from './../shared/match-api.service';
import {Observable} from 'rxjs/index';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './matches-pro.component.html'
})
export class MatchesProComponent implements OnInit {
  observableMatches: Observable<Object>;


  constructor(private matchApiService: MatchApiService) {

  }

  ngOnInit() {
    this.observableMatches = this.matchApiService.getProMatches();
  }

}
