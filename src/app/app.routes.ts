import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordComponent } from './record/record.component';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Employee/SingIn', pathMatch: 'full' }, 
    { path: 'Employee/Record', component: RecordComponent },
    { path: 'Employee/Add-Employee', component: AddComponent },
    { path: 'Employee/ContactUs', component: ContactComponent },
    { path: 'Employee/SingIn', component: LoginComponent },
    { path: 'Employee/SingUp', component: SignupComponent },
    { path: 'Employee/Dashboard', component: DashboardComponent },
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
