import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChildComponent2Component } from '../child-component2/child-component2.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  myForm:FormGroup | any;
  storeDataInToArray: any = {}
  ArrayOfDataGetFromParent:any = []
  parentData: any  = {}
  title : string = 'Hello World Parent'
  po='hi'
  //Only Access The Child Component
@ViewChild(ChildComponent2Component , {static:true}) parent!:ChildComponent2Component;
@ViewChild(HomeComponent , {static:true}) HomeComp!:HomeComponent;

ngAfterViewInit(): void {
    console.log(this.parent.prop)
    console.log(this.HomeComp.hotleName)
}
ngOnInIt(){
  console.log(this.parent.prop)
}
  constructor(private readonly formBuilder:FormBuilder){
    this.myFormModel()
  }

  // ngDoCheck(){
  //   console.log('do change workss')
  // }

  myFormModel(){
    this.myForm = this.formBuilder.group({
      first_name: new FormControl ('',Validators.required),
      last_name: new FormControl ('',Validators.required),
      education: new FormControl ('',Validators.required)
    })
  }

  SubmitForm(){
    const formValues = this.myForm.value;
    this.storeDataInToArray = formValues
    console.log(this.storeDataInToArray)
    this.myForm.reset()
  }

  exp(){
    this.parent.changeTheTitle()
  }
 

  clickMe(){
    alert('hello world')
  }
  dataToget(data:any){
     this.parentData = data
     console.log(this.parentData)
  }
  // onGetData(data:any){
  //  this.ArrayOfDataGetFromParent = data
  //  console.log(this.ArrayOfDataGetFromParent)
  // }
}
