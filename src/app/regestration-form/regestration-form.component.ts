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

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      number: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
     
    });
  }

  onSubmit() {
    console.log(this.registerForm);
    alert('Form submit succesfully');

  }
  reset(){
    this.registerForm.reset();
  }
}
