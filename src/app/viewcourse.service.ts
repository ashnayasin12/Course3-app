import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewcourseService {

  constructor(private http:HttpClient) { }

  viewcourse=()=> {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
}
