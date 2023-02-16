import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes:Routes = [{path:'',component:RegistrationComponent} ,
                {path:'register' , component:RegistrationComponent},
                {path:'profile',component:ProfileComponent} ,
                {path:'details/:id',component:DetailsComponent} ,
                {path:'**',component:ErrorComponent} ,
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProfileComponent,
    DetailsComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
