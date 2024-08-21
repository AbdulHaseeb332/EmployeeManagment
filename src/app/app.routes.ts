import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordComponent } from './record/record.component';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    { path: 'Employee/Dashboard', component: DashboardComponent },
    { path: '', redirectTo: 'Employee/Dashboard', pathMatch: 'full' },
    

    { path: 'Employee/Record', component: RecordComponent },
 
    { path: 'Employee/Add-Employee', component: AddComponent },
    { path: 'Employee/ContactUs', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
