import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent {

  MyNumber: any = 0

  constructor(
    private readonly ServiceService:MyServiceService){}




    AddData(){
      this.MyNumber = this.ServiceService.increment()
     }
   
     MinusData(){
      this.MyNumber = this.ServiceService.decrement()
     }
}
