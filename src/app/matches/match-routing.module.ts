import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatchComponent} from './match.component';
import {MatchesProComponent} from './pro/matches-pro.component';
import {MatchesPublicComponent} from './public/matches-public.component';
import {SingleMatchComponent} from './single/single-match.component';
import {MatchListComponent} from './match-list.component';
import {MatchOverviewComponent} from './details/overview/match-overview.component';
import {MatchBenchmarksComponent} from './details/benchmarks/match-benchmarks.component';
import {MatchDraftComponent} from './details/draft/match-draft.component';
import {MatchPerformanceComponent} from './details/performance/match-performance.component';
import {MatchLaningComponent} from './details/laning/match-laning.component';
import {MatchCombatComponent} from './details/combat/match-combat.component';
import {MatchFarmComponent} from './details/farm/match-farm.component';
import {MatchItemComponent} from './details/item/match-item.component';
import {MatchGraphComponent} from './details/graphs/match-graph.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'matches',
        component: MatchComponent,
        children: [
          {
            path: '', component: MatchListComponent,
            children: [
              {path: '', component: MatchesProComponent},
              {path: 'pro', component: MatchesProComponent},
              {path: 'public', component: MatchesPublicComponent},
            ]
          },
          {
            path: ':match', component: SingleMatchComponent,
            children: [
              {path: '', component: MatchOverviewComponent},
              {path: 'overview', component: MatchOverviewComponent},
              {path: 'benchmarks', component: MatchBenchmarksComponent},
              {path: 'draft', component: MatchDraftComponent},
              {path: 'performance', component: MatchPerformanceComponent},
              {path: 'laning', component: MatchLaningComponent},
              {path: 'combat', component: MatchCombatComponent},
              {path: 'farm', component: MatchFarmComponent},
              {path: 'item', component: MatchItemComponent},
              {path: 'graphs', component: MatchGraphComponent},
              // {path: 'casts', component: MatchOverviewComponent},
              // {path: 'objectives', component: MatchOverviewComponent},
              // {path: 'vision', component: MatchOverviewComponent},
              // {path: 'actions', component: MatchOverviewComponent},
              // {path: 'teamfights', component: MatchOverviewComponent},
              // {path: 'analysis', component: MatchOverviewComponent},
              // {path: 'cosmetics', component: MatchOverviewComponent},
              // {path: 'log', component: MatchOverviewComponent},
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MatchRoutingModule {
}

