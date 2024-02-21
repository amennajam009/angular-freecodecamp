import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @ContentChild('card') userManipulation!: ElementRef<any>;
  @ContentChild('myBtn') userBtn!:ElementRef<any>

  ngAfterContentInit(){
    this.userManipulation.nativeElement.style.color='red'
    this.userBtn.nativeElement.style.background = 'pink'
   }
}
