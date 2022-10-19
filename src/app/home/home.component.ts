import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  bookstitch(){
    this.router.navigate(['bookstitch']);  // define your component where you want to go
}

  productdetails = [
    {
      "pid": "100",
      "pname": "Kids Wear Stiching",
      "pdescription": "Price on call",
      "status": "In Stock",
      "price": "Rs.500 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/09/tutu-dress-150x150.jpg"
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

  productdetails1 = [
    {
      "pid": "104",
      "pname": "Designer Blouse Stiching",
      "pdescription": "Formal",
      "status": "In Stock",
      "price": "Rs.400 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/01/womens-cloth-stitching-11-200x200.png"
    },
    {
      "pid": "105",
      "pname": "Western Wear Stiching",
      "pdescription": "Slim fit",
      "status": "Out of Stock",
      "price":"Rs.700 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/01/western_dresses-200x200.png"
    },
    {
      "pid": "106",
      "pname": "Alternate services",
      "pdescription": "Classic",
      "status": "In Stock",
      "price": "Rs.200 onwards",
      "img":"http://www.fabstitch.in/wp-content/uploads/2015/11/Sewing-and-Alteration-150x150.jpg"
    },
    {
      "pid": "107",
      "pname": "Designer Saree Stiching",
      "pdescription": "Slim fit",
      "status": "Out of Stock",
      "price":"Rs.800 onwards",
      "img":"https://www.fabstitch.in/wp-content/uploads/2015/01/Designer-Anarkali-400x400.jpg",
    },
  ]

}
