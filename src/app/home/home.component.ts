import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor(private _EcomService : EcomService) { }

  ngOnInit(){
    this._EcomService.sendGetRequest("home","all").subscribe((data : any[]) => {
      console.log(data);
      this.products = data;
    })
  }

  addToCart(productId, productQuantity){
    alert([productId,productQuantity]);
  }

  

}
