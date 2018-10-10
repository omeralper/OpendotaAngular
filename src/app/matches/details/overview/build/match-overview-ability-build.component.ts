import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../../shared/shared.service';
import {abilities} from '../../../../shared/data/abilities';

@Component({
  selector: 'app-match-overview-ability-build',
  templateUrl: './match-overview-ability-build.component.html'
})
export class MatchOverviewAbilityBuildComponent implements OnInit {
  abilities = abilities;
  abilityApi = this.sharedService.getAbilityApi();
  @Input() players;
  @Input() isRadiant;
  Array25 = new Array(25);
  passIndex = [16, 18, 20, 21, 22, 23];
  emptyArray = Array.apply(null, Array(25));
  abilityUpgrades = [];

  constructor(public sharedService: SharedService) {

  }

  ngOnInit() {
    this.players.forEach((player) => {
      if (player.isRadiant === this.isRadiant) {
        let currentAbilityList = Object.assign([], this.emptyArray, player.ability_upgrades_arr);
        this.passIndex.forEach(index => currentAbilityList.splice(index, 0, undefined));
        currentAbilityList = currentAbilityList.slice(0, 25);
        currentAbilityList.player = player;
        this.abilityUpgrades.push(currentAbilityList);
      }
    });
  }

  getSource(ability) {
    if (ability < 5900) {
      return this.abilityApi + this.abilities[ability] + '_sm.png';
    } else if (ability >= 5900) {
      return 'assets/talent_tree.svg';
    } else {
      return '';
    }
  }

  test(ability) {
    let a = ability;
  }


}
