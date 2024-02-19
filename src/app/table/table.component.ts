import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { RoomsDetails } from '../rooms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
@Input() roomsData:RoomsDetails[] = [];
@Output() onselect = new EventEmitter<RoomsDetails>()
@Input() sendFunction : Function | undefined
onselectRoom(data:RoomsDetails){
  this.onselect.emit(data)
}

ngOnChanges(change:SimpleChanges){
console.log(change)
}
ngOnInIt(){
  console.log('fnnnn#####',this.sendFunction)
}
}
