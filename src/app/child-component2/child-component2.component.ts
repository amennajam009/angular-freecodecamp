import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ParentComponentComponent } from '../parent-component/parent-component.component';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.scss']
})
export class ChildComponent2Component{
prop='hello'
@ViewChild(ParentComponentComponent , {static:true}) parent!:ParentComponentComponent;
ngAfterViewInit(): void {
    console.log(this.parent.po)
}
ngOnInIt(){
  console.log(this.parent.po)
}
constructor(){

}


changeTheTitle(){
  alert('kkkkkkkkkkkk')
}



// ngAfterViewInit(): void {
//   console.log(this.parent.);
//   // You can access this.parent here after it's initialized.
// }
}
