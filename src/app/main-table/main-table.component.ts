import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit{
@ViewChild('viewExample') viewExam!:ElementRef


ngOnInit(): void {
    this.viewExam.nativeElement.style.color = 'red'
}
ngAfterViewInit(): void {
    this.viewExam.nativeElement.style.color='red'
}
 @Input() tableData = [{
    first_name:'amen',
    last_name:'najam',
    course:'free-code-camp'  
  },
  {
    first_name:'amen',
    last_name:'najam',
    course:'free-code-camp'  
  },
  {
    first_name:'amen',
    last_name:'najam',
    course:'free-code-camp'  
  },
  {
    first_name:'amen',
    last_name:'najam',
    course:'free-code-camp'  
  },
  {
    first_name:'amen',
    last_name:'najam',
    course:'free-code-camp'  
  }]
}
