import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-real1',
  templateUrl: './real1.component.html',
  styleUrls: ['./real1.component.scss']
})
export class Real1Component {
  
  public totalIttem :any=0;
 constructor(private cartservice:CartService,private getapi:ToolService){}
  
  ngOnInit(): void{
   
   this.cartservice.getProducts().subscribe((res)=>{
    this.totalIttem=res.length
   })
  }


  
}
