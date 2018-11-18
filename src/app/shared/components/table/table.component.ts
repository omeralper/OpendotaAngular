import {Compiler, Component, Input, OnInit, AfterViewInit, QueryList, ViewChildren, ViewContainerRef} from '@angular/core';
import Player = match.Player;
import {ComponentFactory} from '@angular/core/src/linker/component_factory';
@Component({
  template: `I am a component {{testInput}}`
})
export class TestComponent {
  @Input() testInput;

  constructor() {

  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() players: Array<Player> = [];
  @Input() columns: Array<any> = [];
   testParam = {player : { a : 1}};
  // @ViewChildren('container', {read: ViewContainerRef}) container: QueryList<ViewContainerRef>;

  constructor() {
    debugger;
  }

  ngOnInit() {
    // this.columns = [{name: 'match_id'}, {name: 'player_slot'},
    //   {name: 'item_usage', component: TestComponent}];
  }
}
