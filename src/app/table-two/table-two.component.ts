import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss']
})
export class TableTwoComponent implements OnInit{
  myForm:FormGroup | any;
  // items!: FormArray<any>;
   anyCondition : boolean = true

  constructor(private readonly formBuilder:FormBuilder){
  this.myFormModel()
  // this.addItem()
  }
  ngOnInit(): void {
    this.UsingPatchValue()
  // this.UsingSetValue()
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
      }),
      //formArray
      items:this.formBuilder.array([])
    })
    // AddControl
    if (this.anyCondition === true) {
      this.myForm.addControl('additionalField1', new FormControl('', Validators.required));
      this.myForm.addControl('additionalField2', new FormControl('', Validators.required));
    }
  }

  
  get items() {
    return this.myForm.get('items') as FormArray;
  }

  //Adding Items

  addItem() {
    this.items.push(this.formBuilder.control(''));
  }

  //Removing Items
  removeItem(index:number){
   this.items.removeAt(index)
  }


  //If we use setValue so it require to get all the value of all formControls
//  UsingSetValue(){
//   this.myForm.setValue({
//     first_name:'amen',
//     last_name:'najam',
//     education:'ddd'
//   })
//  }


//But if we Use patchValue so it allow us to give values of few of controls
UsingPatchValue(){
  this.myForm.patchValue({
    first_name:'amen',
    last_name:'testing'
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
