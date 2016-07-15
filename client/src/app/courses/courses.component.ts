import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';
import {RouterLink} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css'],
  providers: [CoursesService],
  directives: [RouterLink]
  
})
export class CoursesComponent implements OnInit {
   courses:Object[];

  constructor(private _service: CoursesService) {}

  ngOnInit() {
     this._service.getCourses()
		  	.subscribe(courses => this.courses = courses); 
  }

  deleteCourse(course){
if (confirm("Are you sure you want to delete " + course.title + "?")) {
		var index = this.courses.indexOf(course);
    console.log(index);
	
      this.courses.splice(index, 1);

			this._service.deleteCourse(course._id)
	 			.subscribe( 
	 				res => { if(res.success){
                console.log(res);
                console.log("Course successfully deleted");
           }
	 		
                     
	 					//this.courses.splice(index, 0, course);
	 				});
}
		}


//   deleteCourse(course) {
//  let index = this.courses.indexOf(course);
//    this.courses.splice(index, 1);

//    this._service.deleteCourse(course._id)
//      .subscribe();
//}
}
	 


