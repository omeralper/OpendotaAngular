import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', pathMatch: 'full', redirectTo: 'matches'},
        {path: '**', redirectTo: 'matches'}
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
