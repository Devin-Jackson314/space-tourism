import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './components/crew/crew.component';
import { CrewmembersComponent } from './components/crew/crewmembers/crewmembers.component';
import { DestinationComponent } from './components/destination/destination.component';
import { PlanetsComponent } from './components/destination/planets/planets.component';
import { HomeComponent } from './components/home/home.component';
import { TechdisplayComponent } from './components/technology/techdisplay/techdisplay.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { DataresolverService } from './services/dataresolver.service';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  {
    path: 'destination', component: DestinationComponent, children: [
      { path: ':name', component: PlanetsComponent, resolve: {planets: DataresolverService} }
  ]},
  {
    path: 'crew', component: CrewComponent, children: [
    {path: ':name', component: CrewmembersComponent, resolve: {crewmembers: DataresolverService}}
  ]},
  {
    path: 'technology', component: TechnologyComponent, children: [
    {path: ':name', component: TechdisplayComponent, resolve: {techoptions: DataresolverService}}
  ]},
  {path: '*', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
