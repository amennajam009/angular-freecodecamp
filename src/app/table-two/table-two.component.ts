import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss']
})
export class TableTwoComponent {
  myForm:FormGroup | any;

  constructor(private readonly formBuilder:FormBuilder){
  this.myFormModel()
  }

  myFormModel(){
    this.myForm = this.formBuilder.group({
      first_name: new FormControl ('',Validators.required),
      last_name: new FormControl ('',Validators.required),
      education: new FormControl ('',Validators.required),
      studentInfo:this.formBuilder.group({
        studentName:new FormControl('',Validators.required),
        studentAge:new FormControl('' , Validators.required),
        studentAddress:new FormControl('',Validators.required)
      })
    })
  }

  SubmitForm(){
    const formValues = this.myForm.value;
    console.log(formValues)
    this.myForm.reset()
  }
  otherTableData = [
    {
      first_name: 'John',
      last_name: 'Doe',
      course: 'Math'
    },
    {
      first_name: 'Jane',
      last_name: 'Doe',
      course: 'Science'
    },
    // Add more data as needed
  ];
}
