import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {
  blogs = []
  constructor(
    private _blog: BlogService
  ) { }

  ngOnInit(): void {
    this._blog.getBlog()
      .subscribe((res: any) => {
        this.blogs = res
        console.log(this.blogs)
      })
  }

}
