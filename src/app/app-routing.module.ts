import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SendPictureComponent } from './send-picture/send-picture.component';
import { ShareInformationComponent } from './share-information/share-information.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [

  {path: 'shareInformation', component: ShareInformationComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'sendPicture', component: SendPictureComponent},
  {path: 'userInformation', component: UserInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
