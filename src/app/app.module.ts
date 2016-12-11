import { NgModule, ErrorHandler, forwardRef } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { StatsPage } from '../pages/stats/stats';
import { AboutPage } from '../pages/about/about';
import { SettingsData } from '../providers/settings-data';
import { DataService } from '../providers/data';
import { HandAnalyser } from '../providers/hand-analyser';
import { DeckModel } from '../models/deck';
import { PlayerHandModel } from '../models/player-hand';
import { SafePipe } from '../pipes/safe';
import { HandNavbarComponent } from '../components/hand-navbar/hand-navbar';
import { DoubleTapDirective } from '../directives/double-tap';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    StatsPage,
    AboutPage,
    SafePipe,
    HandNavbarComponent,
    DoubleTapDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    StatsPage,
    AboutPage
  ],
  providers: [forwardRef(() => DeckModel), PlayerHandModel, SettingsData, DataService,
              Storage, HandAnalyser, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
