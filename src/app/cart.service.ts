import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 public productList = new BehaviorSubject <any> ([])
 public cartItemlist :any=[]
 public cartCount :number =0
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product:any){
    this.cartItemlist.push(...product)
    this.productList.next(product)
    console.log(this.setProducts);
    
  }
  addtoCart(product:any){
    this.cartItemlist.push(product)
    this.productList.next(this.cartItemlist)
    this.getTotalPrice();
    this.cartCount =this.cartItemlist.length
    console.log(this.cartItemlist);
    // console.log(this.cartCount);
    

  }
  getTotalPrice():any{
  let grandTotal =0
  this.cartItemlist.map((a:any)=>{
    grandTotal += a.total;
  })
  return grandTotal

  }
  removeCartitem(product:any){
    this.cartItemlist.map((a:any,index:any)=>{
    if(product.id === a.id){
      this.cartItemlist.splice(index,1)
    }
    })
  }

  

}
