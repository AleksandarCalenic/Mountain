import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './core/heading/heading.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ResortComponent } from './resort/resort.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResortTabsComponent } from './resort/resort-tabs/resort-tabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TracksComponent } from './resort/tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    NavbarComponent,
    ResortComponent,
    PageNotFoundComponent,
    ResortTabsComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
