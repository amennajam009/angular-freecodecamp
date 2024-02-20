import { Component, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
@Input() dataToPass:any = {}
dataToStore : any [] = []
@Output() sendDataBackToParent = new EventEmitter<any>()
@Output() sendData = new EventEmitter<any>()
sendDataForm: FormGroup | any
constructor(private readonly formBuilder:FormBuilder){
  this.myModel()
}

ngOnChanges(changes: SimpleChanges): void {
this.dataToStore.push(changes["dataToPass"].currentValue)
this.sendDataBackToParent.emit(this.dataToStore)
//  this.dataToPass = changes['dataToPass'].currentValue.toUpperCase()
}


myModel(){
  this.sendDataForm = this.formBuilder.group({
    first_name: new FormControl ('',Validators.required)
  })
}

Submit(){
  const formValues = this.sendDataForm.value;
  this.sendData.emit(formValues)
  console.log(formValues)
}


}
