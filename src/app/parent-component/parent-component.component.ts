import { Component, ViewChild, OnInit, OnChanges, SimpleChanges, ViewContainerRef, ViewChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChildComponent2Component } from '../child-component2/child-component2.component';
import { GetDynamicCompComponent } from '../get-dynamic-comp/get-dynamic-comp.component';
import { ParentComponent } from '../content-projection/parent/parent.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit{
  myForm:FormGroup | any;
  storeDataInToArray: any = {}
  ArrayOfDataGetFromParent:any = []
  parentData: any  = {}
  title : string = 'Hello World Parent'
  po='hi'
  display=true
  //Only Access The Child Component
  //static : true means k agr toh mery child component may koi asyn operation nia perform horha toh yeh usko uss hi time py inatilze krdet hai jb parent ko krta hai
@ViewChild(ChildComponent2Component , {static:true}) ChildComponent!:ChildComponent2Component;
// To Get Dynamic component by using template refrence 
@ViewChild('user' , {read:ViewContainerRef , static:true}) user!:ViewContainerRef
//now i want to access multiple 
@ViewChildren(ChildComponent2Component) childComponent!:QueryList<ChildComponent2Component>
// @ViewChild(ParentComponent , {static:true}) projectedComponent!:ParentComponent;

  myValue: any;

ngAfterViewInit(): void {
 console.log(this.ChildComponent.child_title) 
 console.log(this.childComponent)
  
}



  constructor(private readonly formBuilder:FormBuilder){
    this.myFormModel()
  }
  ngOnInit(){
    // console.log(this.ChildComponent.child_title);
    // const getComponent = this.user.createComponent(GetDynamicCompComponent)
    console.log('&&&&&&&&&&&&&')
  }


  // ngDoCheck(){
  //   console.log('do change workss')
  // }

  // ngAfterContentInit(){
  //   console.log(this.projectedComponent.userManipulation) 
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

  
 

  clickMe(){
   this.ChildComponent.child_title = 'Parent manipulate it'
  }

  RunAlertFromChild(){
  this.ChildComponent.RunChildAlert()
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
