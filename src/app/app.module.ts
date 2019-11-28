import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule, MatTabsModule} from "@angular/material";
import { LicensePageComponent } from './license-page/license-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { InstallComponent } from './install/install.component';
import { ConfigurationPageComponent } from './configuration-page/configuration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LicensePageComponent,
    HomePageComponent,
    GalleryPageComponent,
    HeaderComponent,
    FeaturesPageComponent,
    InstallComponent,
    ConfigurationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
