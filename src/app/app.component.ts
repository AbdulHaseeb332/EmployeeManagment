import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentSer } from './drop-doen.service';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { Iuser } from './inter';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NavbarComponent } from "./navbar/navbar.component";
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule,NzMessageModule, ReactiveFormsModule, RouterModule, NzSpinModule, NzPageHeaderModule, NzTagModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  studentForm: FormGroup;
  Iuser: Iuser[] = [];
  selectedStudentId: any | null = null;
  Saved = true;
  Update = false;
  loading = false; 
  constructor(
    private fb: FormBuilder,
    private service: StudentSer,
    private http: HttpClient,
    private message: NzMessageService
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      phone: ['', [Validators.required, Validators.maxLength(11)]]
    },);
  }
  ngOnInit(): void {
    this.getAllStudents();
    
  }

  getAllStudents(): void {
    this.service.getAllStudent().subscribe(res => {
        console.log('dataget',res)

      }) 
  }
//   saveStudent() {
//     this.Update = false;
//     this.Saved = true;
//     if (this.studentForm.valid) {
//       this.service.addUser(this.studentForm.value, 'Add').subscribe(() => { // Provide the 'type' parameter
//         this.loading = true;
  
//         setTimeout(() => { // Simulate delay
//           Swal.fire('Success', 'Student added successfully', 'success');
//           this.studentForm.reset();
//           this.getAllStudents();
//           const profileTab = document.getElementById('list-profile-list');
//           if (profileTab) {
//             profileTab.click();
//           }
//           this.loading = false;
//         }, 4000); // 4 seconds delay
//       }, error => {
//         console.error('Error adding student', error);
//         this.loading = false;
//       });
//     } else {
//       this.studentForm.markAllAsTouched();
//     }
//     }

//   deleteStudent(id: any): void {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         this.loading = true;
//         this.service.deleteUser(id).subscribe(() => {
//           setTimeout(() => { // Simulate delay
//             Swal.fire('Deleted!', 'The student has been deleted.', 'success');
//             this.getAllStudents();
//             this.loading = false;
//           }, 4000); // 4 seconds delay
//         }, error => {
//           console.error('Error deleting student', error);
//           Swal.fire('Error!', 'There was an error deleting the student.', 'error');
//           this.loading = false;
//         });
//       } else {
//         this.loading = false; // Reset loading if the user cancels
//       }
//     });
//   }

//   GetStudentById(id: any): void {
//     this.loading = true;
//     this.Update = true;
//     this.Saved = false;
//     this.selectedStudentId = id;
//     this.service.GetByID(id).subscribe(
//       (data) => {
//         setTimeout(() => { // Simulate delay
//           this.studentForm.patchValue({
//             name: data.name,
//             email: data.email,
//             phone: data.phone,
//             salary: data.salary
//           });
//           const homeTab = document.getElementById('list-home-list');
//           if (homeTab) {
//             homeTab.click();
//           }
//           this.loading = false;
//         }, 4000); // 4 seconds delay
//       },
//       (error: any) => {
//         console.error('Error fetching student', error);
//         this.loading = false;
//       }
//     );
//   }

//   updateStudent(): void {
//     if (this.studentForm.valid) {
//       if (!this.selectedStudentId) {
//         console.error('No student selected for update');
//         return;
//       }
//       const updatedStudent = { ...this.studentForm.value, id: this.selectedStudentId };
//       this.loading = true;
//       this.service.updateUser(this.selectedStudentId, updatedStudent).subscribe(
//         () => {
//           setTimeout(() => { // Simulate delay
//             Swal.fire('Updated!', 'Student updated successfully', 'success');
//             this.studentForm.reset();
//             this.selectedStudentId = null;
//             this.getAllStudents();
//             const profileTab = document.getElementById('list-profile-list');
//             if (profileTab) {
//               profileTab.click();
//             }
//             this.Update = false;
//             this.Saved = true;
//             this.loading = false;
//           }, 4000); // 4 seconds delay
//         },
//         (error) => {
//           console.error('Error updating student', error);
//           this.loading = false;
//         }
//       );
//     }
// }
// duplicateError: string | null = null;
// checkForDuplicates(formGroup: FormGroup) {
//   const name = formGroup.get('name')?.value;
//   const email = formGroup.get('email')?.value;
  
//   // Return an observable that emits the validation error
//   return this.service.checkForDuplicates({ name, email }).pipe(
//     map(isDuplicate => isDuplicate ? { duplicate: true } : null),
//     catchError(async () => null) // Handle any errors, e.g., service errors
//   );
// }
}
