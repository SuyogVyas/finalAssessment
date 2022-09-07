import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personform!:FormGroup
  @ViewChild('personform') createUserForm!:NgForm;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.personform = this._fb.group({
      FirstName:['',[Validators.required]],
      MiddleName:[''],
      LastName:['',[Validators.required]],
     
      Gender:['',Validators.required],
      DOB:['',Validators.required],
      Department:['',Validators.required],
      Address:['',Validators.required],
      Pincode:['',[Validators.required,Validators.maxLength(6)]],
      
    })
  }
  submit(){
    console.log(this.personform)
  }

}
