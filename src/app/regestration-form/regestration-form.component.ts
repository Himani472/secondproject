import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-regestration-form',
  templateUrl: './regestration-form.component.html',
  styleUrls: ['./regestration-form.component.scss']
})
export class RegestrationFormComponent implements OnInit {
  registerForm: FormGroup;


  constructor() { }

  

  onSubmit() {
    console.log(this.registerForm);
    alert('Form submit succesfully');

  }
  reset(){
    this.registerForm.reset();
  }
}
