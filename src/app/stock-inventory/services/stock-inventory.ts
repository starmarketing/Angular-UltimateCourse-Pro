import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item, Product } from '../models/product.interface';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class StockInventory {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(`${API_URL}/product`).pipe(
      map((response) => {
        return this.extractData(response);
      })
    );
  }

  getCartItems(): Observable<Item[]> {
    return this.http.get(`${API_URL}/cart`).pipe(
      map((response) => {
        return this.extractData(response);
      })
    );
  }

  private extractData(res: any) {
    let body = typeof res != 'object' ? res.json() : res; // If response is a JSON use json(), If response is a String use text()
    if (body) {
      return body;
    } else {
      return {};
    }
  }
}
