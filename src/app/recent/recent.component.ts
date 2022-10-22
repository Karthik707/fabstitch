import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  constructor(private router: Router) { }
  gotoread(){
    this.router.navigate(['read'])
  }
  gototext(){
    this.router.navigate(['text'])
  }
  ngOnInit(): void {
  }

}
