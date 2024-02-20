import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fLogin!: FormGroup;
  constructor(public fb:FormBuilder,
              public router:Router
              ) { }

  ngOnInit() {
    // Add any additional setup logic here if needed

    this.fLogin = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]

    })


  }

  userLogin(){
    const body = this.fLogin.value;
    console.log(body)


  }

  toggleTheme() {
    if (document.body.classList.contains("dark"))
      document.body.classList.remove("dark");
    else
      document.body.classList.add("dark");
  }




}
