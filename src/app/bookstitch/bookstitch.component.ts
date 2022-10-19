import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookstitch',
  templateUrl: './bookstitch.component.html',
  styleUrls: ['./bookstitch.component.css']
})
export class BookstitchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  productdetails = [
    {
      "pid": "100",
      "pname": "Kids Wear Stiching",
      "pdescription": "Price on call",
      "status": "In Stock",
      "price": "Rs.500 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/09/tutu-dress-150x150.jpg",
      
      
    },
    {
      "pid": "101",
      "pname": "Salwar Suit Stiching",
      "pdescription": "Slim fit",
      "status": "Out of Stock",
      "price":"Rs.600 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/01/Anarkali-Custmized-200x200.jpg"
    },
    {
      "pid": "102",
      "pname": "Blouse Stitching",
      "pdescription": "Classic",
      "status": "In Stock",
      "price": "Rs.650 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/01/Blouse-200x200.jpg"
    },
    {
      "pid": "103",
      "pname": "Designer Lehenga & Suits",
      "pdescription": "Classic",
      "status": "In Stock",
      "price": "Rs.1000 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/01/lehenga-200x200.jpg"
    },
  ]

  gotokids(){
    this.router.navigate(['kids']);  // define your component where you want to go
}
gotoblouse(){
  this.router.navigate(['blouse']);  // define your component where you want to go
}
gotolehanga(){
  this.router.navigate(['lehanga']);  // define your component where you want to go
}
gotosalwar(){
  this.router.navigate(['salwar']);  // define your component where you want to go
}

}
