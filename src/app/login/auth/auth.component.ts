import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {



  loginData = {
    email: '',
    password: ''
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  sign() {
    this.router.navigate(['/'])
  }

  c(param) {





    // param = JSON.stringify(param)
    console.log(param);

  }
}
