import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterContentInit{
  @ContentChild('card') userManipulation!: ElementRef<any>;

// constructor(){
//   console.log(this.userManipulation)
// }

ngAfterContentInit(){
 console.log(this.userManipulation)
}
}
