import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../shared/my-service.service';

@Component({
  selector: 'app-table-three',
  templateUrl: './table-three.component.html',
  styleUrls: ['./table-three.component.scss']
})
export class TableThreeComponent implements OnInit {

  MyNumber: any = 0

  constructor(
    private readonly ServiceService:MyServiceService){

}
  ngOnInit(): void {
    // console.log('dddddddddddddddd',this.getData)

  }


// ngOnInIt(){
// }

  AddData(){
    this.MyNumber = this.ServiceService.increment()
   }
 
   MinusData(){
    this.MyNumber = this.ServiceService.decrement()
   }

  //  getData(){
  //   this.ServiceService.getNumbers()
  //  }
}
