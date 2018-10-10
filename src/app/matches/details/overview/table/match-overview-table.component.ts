import {Component, Input} from '@angular/core';
import {items} from '../../../../shared/data/items';
import {heroes} from '../../../../shared/data/heroes';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-match-overview-table',
  templateUrl: './match-overview-table.component.html',
  styleUrls: ['./match-overview-table.component.css']
})
export class MatchOverviewTableComponent {
  items = items;
  heroes = heroes;
  numbers = Array(6).fill(0).map((x, i) => i);
  itemApi = this.sharedService.getItemApi();
  @Input() matchOverview;
  @Input() isRadiant;

  constructor(public sharedService: SharedService) {

  }

  sumOf(field: string) {
    return this.matchOverview.players.reduce((total, player, i) => {
      if (this.isRadiant && i < 5) {
        return player[field] + total;
      } else if (!this.isRadiant && i > 5) {
        return player[field] + total;
      } else {
        return total;
      }
    }, 0);
  }
}
