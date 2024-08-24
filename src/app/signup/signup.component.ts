import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NzCardModule, NzListModule, NzGridModule, NzButtonModule, NzTypographyModule,
    RouterModule, ReactiveFormsModule, FormsModule, CommonModule, NzFormModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;

  SingUp!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.SingUp = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  GotoLogin() {
    this.router.navigate(['Employee/SingIn']);
  }

  submitForm(): void {
    if (this.SingUp.valid) {
      this.isLoading = true;
      this.auth.SignUp(this.SingUp.value).subscribe({
        next: (res) => {
          alert(res.message);
          this.SingUp.reset();
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          alert(err?.error?.message || 'An error occurred');
        }
      });
    } else {
      Object.values(this.SingUp.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }
}
