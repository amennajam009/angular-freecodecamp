import { Component } from '@angular/core';
import { Rooms, RoomsDetails } from '../rooms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //Interpollution means to bind data which means the connection from ts to html file
  course = 'Angular-freecodecamp';

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

  }

  ngOnInIt(){

  }

showStringValue(){
  this.myvar = this.hotleName
}
  toggle(){
     this.toggleProperty = !this.toggleProperty
     
  }
}
