import { Component, OnInit } from '@angular/core';
import { ViewcourseService } from '../viewcourse.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

 course={ courseTitle:"",
 courseDescription:"",
 courseDate:"",
 courseVenue:"",
 courseDuration:""
 }

  constructor(private courseservice:ViewcourseService) { 
    
  }

  ngOnInit(): void {
  }
 Addcourse() {
  this.courseservice.addcourse(this.course).subscribe((data)=>{ 
  console.log(this.course);
  
  })
  alert("Success!");

}
}
