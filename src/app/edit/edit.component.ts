import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  // @Input() student: any;
  // studentForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.studentForm = this.fb.group({
  //     StudentName: ['', Validators.required],
  //     StudentClass: ['', Validators.required],
  //   });
  // }

  // ngOnInit(): void {
  //   if (this.student) {
  //     this.studentForm.patchValue(this.student);
  //   }
  // }

  // saveStudent() {
  //   if (this.studentForm.valid) {
  //     console.log('Student data saved:', this.studentForm.value);
  //     this.modalService.dismissAll();
  //   }
  // }
}

