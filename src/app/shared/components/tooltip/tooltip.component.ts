import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="app-tooltip">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  constructor(public elementRef: ElementRef) {

  }
}
