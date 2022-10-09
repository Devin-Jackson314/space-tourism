import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanetsComponent } from './components/destination/planets/planets.component';
import { CrewmembersComponent } from './components/crew/crewmembers/crewmembers.component';
import { TechdisplayComponent } from './components/technology/techdisplay/techdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NavbarComponent,
    PlanetsComponent,
    CrewmembersComponent,
    TechdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
