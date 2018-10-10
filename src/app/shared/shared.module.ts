import {NgModule} from '@angular/core';
import {SecondsToMinPipe} from './seconds-to-min.pipe';
import {RoundNumberPipe} from './round-number';
import {PlayerComponent} from './components/player/player.component';
import {SharedService} from './shared.service';
import {HeroTooltipComponent} from './components/tooltip/hero-tooltip.component';
import {TooltipDirective} from './components/tooltip/tooltip.directive';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {TableComponent, TestComponent} from './components/table/table.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    SecondsToMinPipe,
    RoundNumberPipe,
    PlayerComponent,
    HeroTooltipComponent,
    TooltipDirective,
    TooltipComponent,
    TableComponent,
    TestComponent
  ],
  exports: [
    SecondsToMinPipe,
    RoundNumberPipe,
    PlayerComponent,
    HeroTooltipComponent,
    TableComponent
  ],
  entryComponents: [TestComponent],
  providers: [SharedService]
})
export class SharedModule {
}
