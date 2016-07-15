import { Component, OnInit } from '@angular/core';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {CanDeactivate, Router, RouteParams} from '@angular/router-deprecated';

import {CoursesService} from './courses.service';
import {RouterLink} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable';
import {Course} from './course';

@Component({
  moduleId: module.id,
  selector: 'app-courses-form',
  templateUrl: 'courses-form.component.html',
  //styleUrls: ['courses-form.component.css']
  providers: [CoursesService,FormBuilder],
  directives: [RouterLink]
})
export class CoursesFormComponent implements OnInit {
  course = new Course();
  form: ControlGroup;
  title: string;
  
  

  constructor(private _router: Router, private _routeParams: RouteParams,
        private _courseService: CoursesService) {}

  ngOnInit() {    
    if(this._routeParams.get("id")){
      this._courseService.getCourse(this._routeParams.get('id')).subscribe(res=>{ // since we have written id in routes
        this.course=res;                                                          //so we are getting 'id'
      });
    }
  }


save(){

    if(this.course._id){
      this._courseService.updateCourse(this.course).subscribe(res=>{
          if(res.success){
             console.log(res);
              console.log('Data successfully edited');
               this._router.navigate(['Course']);
          }
          else{
            console.log(res);
            console.log("Failed to edit");
          }
      });
    }else{
          this._courseService.addCourse(this.course).subscribe(res => {
              if(res.success){
                console.log(res);
                console.log("Course successfully added");
                 this._router.navigate(['Course']);
              }
              else{
                console.log(res);
                console.log("failed to add");
              }
              // show errors.
        });
    }

            
            
		// result.subscribe(x => {
    //         // Ideally, here we'd want:
    //         // this.form.markAsPristine();
    //         this._router.navigate(['Course']);
    //     });
	}



}
