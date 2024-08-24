import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { Iuser } from './inter';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,DashboardComponent,LoginComponent, HttpClientModule,FormsModule, ReactiveFormsModule, RouterModule, NzSpinModule, NzPageHeaderModule, NzTagModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

}
