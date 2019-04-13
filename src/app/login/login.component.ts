import { Component, OnInit } from '@angular/core';
import{LocalstorageService} from '../localstorage.service';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls : LocalstorageService, private router: Router, private fb: FormBuilder) { }
  users : any[] = [];
  selectedUser : any = null;
  loginForm : FormGroup;
  isSubmitted: boolean = false;
  error: string = null;


  ngOnInit() {
    this.initForm();
   this.users = this.ls.getUsers();
  }

  initForm()
  {
    this.loginForm = this.fb.group({
      password: ['', Validators.required]
    })
  }


  remove(user)
  {
    this.selectedUser = null;
    this.users = this.users.filter((u) => u.email != user.email);
    this.ls.setUsers(this.users);
  }

  selectEmail(user)
  {
    this.selectedUser = user;
  }

  login()
  {
    this.isSubmitted = true;
    this.error = null;
    if(this.loginForm.valid && this.selectedUser !== null)
    {
      const password = this.loginForm.get('password').value;
      if(this.selectedUser.password === password)
      {
        this.ls.setIsLoggedIn();
        this.router.navigate(['/dashboard']);
        return;
      }

      this.error = 'Incorrect Email or password';

    }
  }

}
