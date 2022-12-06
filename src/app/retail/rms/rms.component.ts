import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-rms',
  templateUrl: './rms.component.html',
  styleUrls: ['./rms.component.scss'],
})
export class RMSComponent implements OnInit {
  userForm!: FormGroup;
  restrictedUser = ['sumit', 'Mohit'];

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: [
        '',
        [Validators.pattern('[a-z]*'), this.isRestrictedUser.bind(this)],
      ],
      email: ['', Validators.email],
    });
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  formSubmit() {
    console.log(this.userForm);
    this.userForm.patchValue({
      username: 'Raja'
    });
  }

  isRestrictedUser(control: FormControl): { [key: string]: boolean } | null {
    if (this.restrictedUser.includes(control.value)) {
      return { userrestricted: true };
    }

    return null;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((pram: ParamMap) => {
      let id = pram.get('id');
      console.log(id);
    });

    this.userForm.valueChanges.subscribe(data => {
      console.log(data);
    })
  }
}
