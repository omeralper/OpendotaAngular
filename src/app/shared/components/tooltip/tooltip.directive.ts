import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {TooltipComponent} from './tooltip.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input() appTooltip: TooltipComponent;
  toolTipComponentStyle;

  ngOnInit() {
    this.toolTipComponentStyle = this.appTooltip.elementRef.nativeElement.querySelector('.app-tooltip').style;
  }

  @HostListener('mouseenter')
  onEnter() {
     this.toolTipComponentStyle.display = 'block';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.toolTipComponentStyle.display = 'none';
  }

}
