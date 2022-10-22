import { Component, OnInit } from '@angular/core';
//Add to cart - cart items
import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
//npm install sweetalert2
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  constructor(private cartSvc: CartService, private router:Router) { }

  
  //Cart List
  carts:Cartitem={
    id:0,
    pname:'',
    pdesc:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1 ,
    subtotal:1   
  }

  // quanties:number=0;
  cartData: any = [];
  totalprice: number = 0;
  //quantity = 1;
  cartData1: any = [];
  // subtotal: number = 0;
  quantity:number=0;
  //quantity1 = 1;
  //@Input() count?:number;

  
 
  

  subtotal(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) =>  (item.price * item.quantity), intialValue);
    return a;
  }

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), intialValue);
    return a;
  }
  cart: Cartitem[] = [];
  
  delete(deleteItem: Cartitem) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.pname)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['bookstitch'])
  }
  gotocheckout(){
    this.router.navigate(['checkout'])
  }
  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }

}
