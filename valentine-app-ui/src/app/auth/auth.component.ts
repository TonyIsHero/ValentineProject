import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { user } from '../models/commonmodel';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{

  authForm!:FormGroup;
  sampleuser : user ={username:'roydisha', password:'Loveyourdick'}
  adminuser : user ={username:'admin', password:'admin'}

  validateCred(){
    if(this.authForm.valid)
    {
      if((this.authForm.value.username===this.sampleuser.username)&&(this.authForm.value.password===this.sampleuser.password))
      {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('isAdmin', 'false');
        this.router.navigate(['/home']);
      }
      else if((this.authForm.value.username===this.adminuser.username)&&(this.authForm.value.password===this.adminuser.password))
      {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('isAdmin', 'true');
        this.router.navigate(['/home']);
      }

      else
        console.log("Fail");
    }
  }

  constructor(private fb: FormBuilder, private router:Router){}
  ngOnInit():void{
    this.authForm=this.fb.group({username:[],password:[]});
  }
}
