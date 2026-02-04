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

  validateCred(){
    if(this.authForm.valid)
    {
      if((this.authForm.value.username===this.sampleuser.username)&&(this.authForm.value.password===this.sampleuser.password))
        this.router.navigate(['/home']);

      else
        console.log("Fail");
    }
  }

  constructor(private fb: FormBuilder, private router:Router){}
  ngOnInit():void{
    this.authForm=this.fb.group({username:[],password:[]});
  }
}
