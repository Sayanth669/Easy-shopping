import { Component, inject } from '@angular/core';
import { ToolService } from '../tool.service';
import { CartService } from '../cart.service';

// import {Component, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-real-api',
  templateUrl: './real-api.component.html',
  styleUrls: ['./real-api.component.scss'],
  // standalone:true,
  // imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule],
})
export class RealAPIComponent {

  durationInSeconds = 5;

   postArray:any=[]
   public totalIttem :number=0;

  constructor(private getapi :ToolService ,private cartservice:CartService){

    
  }
  
  

  ngOnInit(){
    this.getapi.getPost().subscribe( (res)=>{

      this.postArray=res
      // console.log(this.postArray);
      
    })
  }
  addtocart(i:any){
    this.cartservice.addtoCart(i);
    this.totalIttem =this.cartservice.cartCount
    // console.log();
    
   }
  
}
