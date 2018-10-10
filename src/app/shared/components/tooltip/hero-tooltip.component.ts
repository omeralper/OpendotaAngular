import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';
import {heroes, heroDetails} from '../../data/heroes';

@Component({
  selector: 'app-hero-tooltip',
  templateUrl: './hero-tooltip.component.html',
  styleUrls: ['./hero-tooltip.component.css']
})
export class HeroTooltipComponent implements OnInit {
  @Input() heroId;
  heroApi = this.sharedService.getHeroApi();

  imageSource: string;
  heroName: string;
  localizedName: string;
  heroDetails;

  constructor(public sharedService: SharedService) {
    // const {localized_name, attack_type, roles, primary_attr} = this.heroDetails[this.heroId];
  }

  ngOnInit() {
    this.heroName = heroes[this.heroId].name;
    this.imageSource = this.heroApi + this.heroName + '_vert.jpg';
    this.heroDetails = heroDetails[this.heroId];
  }

}
