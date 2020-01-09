import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: '/login';
  submitted = false;
  loginForm = this.fb.group({
    emailId: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });



  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // reset login status
    // this.Auth.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm);
    console.warn("hello", this.loginForm.controls.emailId.value, this.loginForm.controls.password.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log(this.loginForm);
      return;
    }

    this.authService.login(this.f.emailId.value, this.f.password.value)

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
