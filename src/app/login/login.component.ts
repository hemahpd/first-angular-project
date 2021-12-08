import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sname='';
  sno='';
  message='';
  constructor(private router:Router) { }
  signIn(){
    if(this.sname=='hema'&&this.sno=='14763'){
      this.router.navigateByUrl('/findAvg');
    }
    else{
      this.message="Invalid credentials";
    }
  }

  ngOnInit(): void {
  }

}
