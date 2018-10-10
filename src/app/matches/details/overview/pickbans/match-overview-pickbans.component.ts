import {Component, Input} from '@angular/core';
import {heroes} from '../../../../shared/data/heroes';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-match-overview-pickbans',
  templateUrl: './match-overview-pickbans.component.html',
  styleUrls: ['./match-overview-pickbans.component.css']
})

export class MatchOverviewPickbansComponent {
  heroes = heroes;
  heroApi = this.sharedService.getHeroApi();
  @Input() picks_bans;
  @Input() isRadiant;

  constructor(public sharedService: SharedService) {

  }

  test(){
    let a = 3
  }

}
