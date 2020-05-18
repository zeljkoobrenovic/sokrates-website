import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule, MatExpansionModule, MatIconModule, MatTabsModule} from '@angular/material';
import {LicensePageComponent} from './license-page/license-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';
import {HeaderComponent} from './header/header.component';
import {FeaturesPageComponent} from './features-page/features-page.component';
import {InstallComponent} from './install/install.component';
import {ConfigurationPageComponent} from './configuration-page/configuration-page.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {HttpClientModule} from '@angular/common/http';
import {HowtoComponent} from './howto/howto.component';
import {ConfigLandscapeComponent} from './config-landscape/config-landscape.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

const languages = () => {
  return {
    json: () => import('highlight.js/lib/languages/json')
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LicensePageComponent,
    HomePageComponent,
    GalleryPageComponent,
    HeaderComponent,
    FeaturesPageComponent,
    InstallComponent,
    ConfigurationPageComponent,
    HowtoComponent,
    ConfigLandscapeComponent
  ],
  imports: [
    HighlightModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: languages
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
