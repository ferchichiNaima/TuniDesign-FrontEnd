import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShareInformationComponent } from './share-information/share-information.component';
import { SendPictureComponent } from './send-picture/send-picture.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { RatingPageComponent } from './rating-page/rating-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpComponent,
    ShareInformationComponent,
    SendPictureComponent,
    UserInformationComponent,
    RatingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
