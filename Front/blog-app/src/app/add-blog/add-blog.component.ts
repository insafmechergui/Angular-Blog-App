import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  // registerBlogData = {
  //   title: '',
  //   text: ''
  // }
  constructor(
    private _blog: BlogService
  ) { }
  blogs = []
  ngOnInit(): void { }

  registerBlog(title, text, picture) {
    let blog = { 'title': title.value, 'text': text.value, 'picture': picture.value }
    this._blog.registerBlog(blog)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )

    title.value = "",
      text.value = "",
      picture.value = ""
  }
}
