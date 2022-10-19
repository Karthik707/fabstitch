import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blouse',
  templateUrl: './blouse.component.html',
  styleUrls: ['./blouse.component.css']
})
export class BlouseComponent implements OnInit {

  constructor(private router: Router) { }
  myurl='http://www.fabstitch.in/wp-content/uploads/2015/01/Blouse.jpg';

  ngOnInit(): void {
  }
  gotokids(){
    this.router.navigate(['kids']);  // define your component where you want to go
}
gotoblouse(){
  this.router.navigate(['blouse']);  // define your component where you want to go
}
gotolehanga(){
  this.router.navigate(['blouse']);  // define your component where you want to go
}
gotoanarkali(){
  this.router.navigate(['blouse']);  // define your component where you want to go
}
}
