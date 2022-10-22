import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router: Router) { }
  gotofaq(){
    this.router.navigate(['faq'])
  }
  gotoprivacy(){
    this.router.navigate(['privacy'])
  }
  gototerms(){
    this.router.navigate(['terms'])
  }

  ngOnInit(): void {
  }

}
