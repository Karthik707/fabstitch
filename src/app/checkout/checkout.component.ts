import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkouturl = environment.checkoutapi;
  checkoutForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    pincode: new FormControl(''),
    pickup: new FormControl(''),
    notes: new FormControl('')

  })
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]],
      email: ['', [Validators.required]],
      phone: ['',[ Validators.required]],
      address: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      pickup: ['', [Validators.required]],
      notes: ['', [Validators.required]]
    });
  }


  get f() { return this.checkoutForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }

    this.http.post<any>(this.checkouturl, this.checkoutForm.value)
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
          title: 'Order Placed Successfully'
        })
        this.checkoutForm.reset();
        this.router.navigate(['']);
      })

  }


}
