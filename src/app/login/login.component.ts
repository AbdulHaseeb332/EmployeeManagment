import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzCardModule,
    NzAlertModule,
    NzListModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    RouterModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fix typo: use `styleUrls`
})
export class LoginComponent implements OnInit {

  UserForm!: FormGroup;
  isLoading= false;
  showError = false; 
  errorMessage = '';
  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]] // Changed 'Password' to 'password'
    });
  }

  submitForm(): void {
    if (this.UserForm.valid) {
      this.isLoading = true;
      this.showError = false;
      this.auth.Login(this.UserForm.value).subscribe({
        next: (res) => {
          this.UserForm.reset();
      this.isLoading = false;
      this.router.navigate(['Employee/Dashboard']); 

        },
        error: (err) => {
          this.isLoading = false;
          
          this.showError = true; 
          this.errorMessage = err?.error?.message || 'An error occurred';
          setTimeout(() => {
            this.showError = false;
          }, 3000);
        }
      });
    } else {
      Object.values(this.UserForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }

  GotoSingup() {
    this.router.navigate(['Employee/SingUp']); 
  }


  
  
}
