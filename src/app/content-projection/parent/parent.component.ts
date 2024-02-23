import { AfterContentInit, Component, ContentChild, ElementRef,Self } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers:[MyServiceService]
})
export class ParentComponent implements AfterContentInit{
  @ContentChild('card') userManipulation!: ElementRef<any>;

constructor(private myservice:MyServiceService){
  console.log(this.userManipulation)
}

ngAfterContentInit(){
 console.log(this.userManipulation)
}
}
