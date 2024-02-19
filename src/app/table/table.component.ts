import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomsDetails } from '../rooms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
@Input() roomsData:RoomsDetails[] = [];
@Output() onselect = new EventEmitter<RoomsDetails>()

onselectRoom(data:RoomsDetails){
  this.onselect.emit(data)
}

}
