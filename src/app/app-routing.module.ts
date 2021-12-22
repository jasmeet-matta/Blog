import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AutoComponent } from './auto/auto.component';
import { LandComponent } from './land/land.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'events',component:EventsComponent},
  {path:'auto',component:AutoComponent},
  {path:'land',component:LandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AboutComponent,GalleryComponent,ContactComponent,HomeComponent,EventsComponent,AutoComponent,
LandComponent]
