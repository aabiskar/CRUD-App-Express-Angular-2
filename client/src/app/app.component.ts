import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { CoursesFormComponent } from './courses/courses-form.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[CoursesComponent,ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS,HTTP_PROVIDERS]
})

@RouteConfig([
  { path: '/course', name: 'Course', component: CoursesComponent },
  { path: '/course-new', name: 'NewCourse', component: CoursesFormComponent },
  { path: '/course/:id', name: 'EditCourse', component: CoursesFormComponent }

  
])
export class AppComponent {
  title = 'app works!';
}
