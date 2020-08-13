import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _addBlogUrl = "http://localhost:8080/newBlog";
  private _displayBlogUrl = "http://localhost:8080/blog";

  constructor(
    private http: HttpClient,
  ) { }
  registerBlog(blog) {
    return this.http.post<any>(this._addBlogUrl, blog)
  }
  getBlog() {
    return this.http.get(this._displayBlogUrl)
  }

}
