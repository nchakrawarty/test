import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<any>(`http://eletionapp.3m3pfprvaw.ap-south-1.elasticbeanstalk.com/api/Users/login`, { email, password, returnSecureToken: true })
      .pipe(map(user => {
        // localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        // login successful if there's a jwt token in the response
        if (user && user.id) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  register(email: string, password: string, realm: string, age: number, gender: string, username: string) {
    return this.http.post<any>(`http://eletionapp.3m3pfprvaw.ap-south-1.elasticbeanstalk.com/api/Users`, { email: email, password: password, realm: realm, age: age, gender: gender, username: username, emailverified: true })
      .pipe(map(user => {
        // localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        // login successful if there's a jwt token in the response
        // if (user && user.id) {
        //   // store user details and jwt token in local storage to keep user logged in between page refreshes
        //   localStorage.setItem('currentUser', JSON.stringify(user));
        // }
        // return user;
        this.router.navigate(['/login']);
      }));
  }
}

