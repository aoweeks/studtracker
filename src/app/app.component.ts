import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, AdMob } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

       interface AdMobType {
              banner: string,
              interstitial: string
            };
       
            var admobid: AdMobType;
            if (/(android)/i.test(navigator.userAgent)) {
              admobid = { // for Android
                banner: 'ca-app-pub-',
                interstitial: 'ca-app-pub-8739364389092526/2312271495'
              };
            } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
              admobid = { // for iOS
                banner: 'ca-app-pub-',
                interstitial: 'ca-app-pub-'
              };
            } else {
              admobid = { // for Windows Phone
                banner: 'ca-app-pub-',
                interstitial: 'ca-app-pub-'
              };
            }
       
            if (AdMob) AdMob.createBanner({
       
              adId: admobid.banner,
              isTesting: true,//comment this out before publishing the app
              autoShow: true
            });
       
            if (AdMob) AdMob.prepareInterstitial({
              adId: admobid.interstitial,
              isTesting: true, //comment this out before publishing the app
              autoShow: false
            });
       
          });
  }
}
