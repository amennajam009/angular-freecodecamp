import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Rooms, RoomsDetails } from '../rooms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('testViewChild') testingView!:ElementRef
  //Interpollution means to bind data which means the connection from ts to html file
  course = 'Angular-freecodecamp';
  @Input() dataToPass:any

  //property binding
  courseReview = 'Amazing course of the Year';
  //property binding
  imageUrl =
    `https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwio6939-7KEAxW4caQEHb7YB6sQMygCegQIARBP..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&q=image&ved=2ahUKEwio6939-7KEAxW4caQEHb7YB6sQMygCegQIARBP`;
  //property binding
  myClassProperty = false  
  toggleProperty = false
  hotleName = 'dummy'
  myvar :string = ''
  @Output() sendFunction = new EventEmitter<string>()
  
  //event binding

  //interface
  rooms : Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms:0
  }
// rooms detail interface
roomsDetails:RoomsDetails [] = [{
  roomType:'dummy data',
  price: 345689,
  description:'dummy description',
  checkin_Time: new Date ('11/17/2020'),
  checkout_Time: new Date ('11/17/2020')
},
{
  roomType:'dummy data',
  price: 345689,
  description:'dummy description',
  checkin_Time: new Date ('11/17/2020'),
  checkout_Time: new Date ('11/17/2020')
},
{
  roomType:'dummy data',
  price: 345689,
  description:'dummy description',
  checkin_Time: new Date ('11/17/2020'),
  checkout_Time: new Date ('11/17/2020')
}
]
  constructor(){
  this.sendFunction.emit('experimentFunction')
  }
  ngAfterViewInit(): void {
    this.testingView.nativeElement.style.color='red'
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.dataToPass
    },5000)
    console.log(this.dataToPass)
  }
  addRooms(){
    const room:RoomsDetails={
      roomType:'dummy data4',
      price: 345689,
      description:'dummy description4',
      checkin_Time: new Date ('11/17/20204'),
      checkout_Time: new Date ('11/17/20204')
    }
    this.roomsDetails = [...this.roomsDetails,room]
  }


  selectRoom(data:RoomsDetails){
    console.log('data',data)
  }
showStringValue(){
  this.myvar = this.hotleName
}

toggle(){
     this.toggleProperty = !this.toggleProperty  
  }

  experimentFunction(){
    const value = 'Hello World!'
    console.log(value)
  }

}
