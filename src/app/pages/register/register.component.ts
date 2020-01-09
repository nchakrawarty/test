import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  returnUrl: '/login';
  submitted = false;
  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    emailId: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    age: ['', [Validators.required, Validators.nullValidator]],
    gender: ['']
  });

  genders = ['Male', 'Female', 'Dont want to mention']

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
  }


  get f() { return this.registerForm.controls; }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm);
    console.warn("hello", this.registerForm.controls.emailId.value, this.registerForm.controls.password.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      return;
    }

    this.authService.register(this.f.emailId.value, this.f.password.value, this.f.name.value, this.f.age.value, this.f.gender.value, this.f.name.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          console.log(data, this.returnUrl);
        },
        error => {
          console.log(error);
        });
  }

}
