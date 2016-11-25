import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { DeckModel } from '../models/deck';
import { SafePipe } from '../pipes/safe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    SafePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage
  ],
  providers: [DeckModel, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
