import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/product';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service : ProduitService ){
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: this.products.length
    };
  }
  products : Produit[];

  ngOnInit(): void {
  }

  public getProducts(): void {
    this.service.getAll().subscribe(
      (response: Produit[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  config: any;
  pageChanged(event){
    this.config.currentPage = event;
  }

}
