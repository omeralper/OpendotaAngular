import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatchComponent} from './match.component';
import {MatchApiService} from './shared/match-api.service';
import {MatchRoutingModule} from './match-routing.module';
import {MatchesProComponent} from './pro/matches-pro.component';
import {MatchesPublicComponent} from './public/matches-public.component';
import {SingleMatchComponent} from './single/single-match.component';
import {MatchListComponent} from './match-list.component';
import {MatchOverviewComponent} from './details/overview/match-overview.component';
import {MatchBenchmarksComponent} from './details/benchmarks/match-benchmarks.component';
import {MatchCombatComponent} from './details/combat/match-combat.component';
import {MatchDraftComponent} from './details/draft/match-draft.component';
import {MatchFarmComponent} from './details/farm/match-farm.component';
import {MatchPerformanceComponent} from './details/performance/match-performance.component';
import {MatchLaningComponent} from './details/laning/match-laning.component';
import {MatchItemComponent} from './details/item/match-item.component';
import {MatchGraphComponent} from './details/graphs/match-graph.component';
import {MatchOverviewTableComponent} from './details/overview/table/match-overview-table.component';
import {MatchOverviewPickbansComponent} from './details/overview/pickbans/match-overview-pickbans.component';
import {MatchOverviewAbilityBuildComponent} from './details/overview/build/match-overview-ability-build.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    MatchComponent,
    MatchListComponent,
    MatchesProComponent,
    MatchesPublicComponent,
    SingleMatchComponent,
    MatchOverviewComponent,
    MatchOverviewTableComponent,
    MatchOverviewPickbansComponent,
    MatchOverviewAbilityBuildComponent,
    MatchBenchmarksComponent,
    MatchDraftComponent,
    MatchPerformanceComponent,
    MatchLaningComponent,
    MatchCombatComponent,
    MatchFarmComponent,
    MatchItemComponent,
    MatchGraphComponent
  ],
  imports: [
    BrowserModule,
    MatchRoutingModule,
    SharedModule
  ],
  exports: [
    MatchComponent
  ],
  providers: [MatchApiService]
})
export class MatchModule {
}
