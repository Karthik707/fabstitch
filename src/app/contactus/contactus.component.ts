import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contacturl = environment.contactapi;
  contactForm = new FormGroup({
    username: new FormControl(''),
    useremail: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  })

  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]],
      useremail: ['', [Validators.required]],
      subject: ['',[ Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  get f() { return this.contactForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.http.post<any>(this.contacturl, this.contactForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'Your message Submitted Successfully'
        })
        this.contactForm.reset();
        this.router.navigate(['']);
      })

  }

}
