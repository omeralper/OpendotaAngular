import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MatchModule} from './matches/match.module';
import {HttpClientModule} from '@angular/common/http';
import {NavComponent} from './nav/nav.component';
import {SharedService} from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    MatchModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
