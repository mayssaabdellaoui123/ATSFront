import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  public get(id: String): Observable<Produit> {
    return this.http.get<Produit>(`http://localhost:8081/api/products/${id}`);
  }

  public getAll() : Observable<Produit[]>{
    return this.http.get<Produit[]>(`http://localhost:8081/api/products`);
  }

}
