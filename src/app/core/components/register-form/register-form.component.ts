import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user.model';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  @Output() create = new EventEmitter<User>();

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    fullname: ['', [Validators.required]],
    faculty: ['วิศวกรรมศาสตร์', [Validators.required]],
    major: ['วิศวคอมพิวเตอร์', Validators.required],
    studentId: ['', [Validators.required, Validators.minLength(15)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  createUser(form: FormGroup) {
    const { invalid, value } = form;
    if (invalid) {
      return alert('กรอกข้อมูลให้ครบ');
    }

    return this.create.emit({ ...value });
  }
}
