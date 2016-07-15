import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class CoursesService {
  private _url = "http://localhost:3000/api/courses";

  constructor(private _http: Http) {}


	getCourses(){
		return this._http.get(this._url)
		 	.map(res => res.json());
	}

	getCourse(courseId){
		return this._http.get(this.getCourseUrl(courseId))
			.map(res => res.json());
	}
    
    addCourse(course){
	  let headers = new Headers({
     'Content-Type': 'application/json'});
		return this._http.post(this._url, JSON.stringify(course),{headers: headers})
			.map(res => res.json());
	}
    
    updateCourse(course){
	  let headers = new Headers({
     'Content-Type': 'application/json'});
	 //debugger;

	 	return this._http.put(this.getCourseUrl(course._id)
		  , JSON.stringify(course),{headers: headers})
	 	 	.map(res => res.json());
	 }
    
    deleteCourse(courseId){
		return this._http.delete(this._url + "/" + courseId)
			.map(res => res.json());
	}
    
    private getCourseUrl(courseId){
	 	return this._url + "/" + courseId;
	 }
    
  
}
