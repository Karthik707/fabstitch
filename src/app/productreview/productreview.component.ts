import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductapiService } from '../productapi.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productreview',
  templateUrl: './productreview.component.html',
  styleUrls: ['./productreview.component.css']
})
export class ProductreviewComponent implements OnInit {

  formValue!: FormGroup;
  productModelObj : ProductModel = new ProductModel();
  productData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  submitted = false;
  constructor(private formbuilder: FormBuilder, private route: Router, private http: HttpClient, private api:ProductapiService) { }

  get f() { return this.formValue.controls; }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      pname:['',[Validators.required]],
      pdescription:['',[Validators.required]],
      price:['',[Validators.required,Validators.pattern('[0-9]*')]]
      // img:['',Validators.required]
    })
    this.getProducts();
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails(){
    this.submitted = true;
      if (this.formValue.invalid) {
        return;
      }
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.price = this.formValue.value.price;
    // this.productModelObj.img = this.formValue.value.img;

    this.api.postProducts(this.productModelObj).subscribe(res=>{
      console.log(res);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'success',
        title: 'Review Submitted successfully'
      })
      //alert("New review added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }

  getProducts(){
    this.api.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }

  deleteProducts(product: any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      alert("The Review deleted!")
      this.getProducts();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.id = product.id;
    this.formValue.controls['pname'].setValue(product.pname);
    this.formValue.controls['pdescription'].setValue(product.pdescription);
    this.formValue.controls['price'].setValue(product.price);
    // this.formValue.controls['img'].setValue(product.img);
  }

  updateProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.price = this.formValue.value.price;
    // this.productModelObj.img = this.formValue.value.img;
    this.api.updateProducts(this.productModelObj, this.productModelObj.id).subscribe(res=>{
      alert("The review updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    })
  }

}
