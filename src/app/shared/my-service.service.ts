import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})

export class MyServiceService {
private numbers : number = 1

  constructor() {
   }
 
   increment(){
   return this.numbers++
   }

   decrement(){
    return this.numbers--;
   }


}
