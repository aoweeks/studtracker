import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { StatsPage } from '../pages/stats/stats';
import { SettingsData } from '../providers/settings-data';
import { DeckModel } from '../models/deck';
import { PlayerHandModel } from '../models/player-hand';
import { SafePipe } from '../pipes/safe';
import { HandNavbarComponent } from '../components/hand-navbar/hand-navbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    StatsPage,
    SafePipe,
    HandNavbarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    StatsPage
  ],
  providers: [DeckModel, PlayerHandModel, SettingsData, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
