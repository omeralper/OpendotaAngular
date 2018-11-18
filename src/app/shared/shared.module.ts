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
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  imports: [BrowserModule, DynamicModule.withComponents([PlayerComponent])],
  declarations: [
    SecondsToMinPipe,
    RoundNumberPipe,
    HeroTooltipComponent,
    PlayerComponent,
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
  entryComponents: [TestComponent, PlayerComponent],
  providers: [SharedService]
})
export class SharedModule {
}
