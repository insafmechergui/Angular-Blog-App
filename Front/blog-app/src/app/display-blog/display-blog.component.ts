import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {
  title1 = 'helloooo1';
  title2 = 'helloooo2';
  text1 = "Hello Text1";
  text2 = "Hello Text2";

  constructor(
    private _blog: BlogService
  ) { }

  ngOnInit(): void {
    this._blog.getBlog()
      .subscribe((data) => {
        res => { console.log(res); }
        err => console.log(err)
      })
  }



}
