import {Component, Input} from '@angular/core';
import {SharedService} from '../../shared.service';
import {heroes} from '../../data/heroes';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent {
  @Input() player;
  heroes = heroes;
  heroApi = this.sharedService.getHeroApi();

  constructor(public sharedService: SharedService) {

  }
}
