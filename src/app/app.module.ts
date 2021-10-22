import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ParticipantsComponent } from './participants/participants.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
 

const appRoutes: Routes = [
  {
  path: 'dashboard',
  component: DashboardComponent}, 
  {
    path: 'session',
    component: SessionsComponent}, 

  { path: 'formateur',
    component: FormateursComponent},
  { path: 'participants',
    component: ParticipantsComponent},  
    
    
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: PagenotfoundComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    FormateursComponent,
    ParticipantsComponent,
    DashboardComponent,
    NavbarComponent,
     
    
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true,useHash:true }
    ),
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
