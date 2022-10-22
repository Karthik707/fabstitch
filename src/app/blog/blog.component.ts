import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  gotoread(){
    this.router.navigate(['read']);  // define your component where you want to go
  }
  gototext(){
    this.router.navigate(['text']);  // define your component where you want to go
  }
}
