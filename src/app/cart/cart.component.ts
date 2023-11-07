import { Component, OnInit } from '@angular/core'
import { ToolService } from '../tool.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public product :any=[]
  public grandTotal :number=0;
  public length :number =0
 constructor( private cartservice:CartService){}
   
 ngOnInit(): void {
   this.length = this.cartservice.cartCount
   console.log(this.length);
   this.product =this.cartservice.cartItemlist
   console.log(this.product);
   
   
 }
 remove(i:any){
this.cartservice.removeCartitem(i)
 }

}
