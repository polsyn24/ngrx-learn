import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingItem } from '../store/models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = 'http://localhost:3000/shopping';

  constructor(private httpClient: HttpClient) { }

  getShoppingListItems() {
    return this.httpClient.get<ShoppingItem[]>(this.SHOPPING_URL);
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.httpClient.post(this.SHOPPING_URL, shoppingItem);
  }

  deleteShoppingItem(id: string) {
    return this.httpClient.delete(`${this.SHOPPING_URL}/${id}`);
  }

}
