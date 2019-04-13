import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LocalstorageService} from '../localstorage.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private ls: LocalstorageService, private router: Router) { }
  registerForm : FormGroup;
  isSubmitted: boolean = false;
  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  register()
  {
    this.isSubmitted = true;
    if(this.registerForm.valid)
    {
      this.ls.setUser(this.registerForm.value);
      this.ls.setIsLoggedIn();
      this.router.navigate(['/dashboard'])

    }
  }

}
