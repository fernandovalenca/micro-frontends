import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart-component',
  template: `
    <div class="simple-card">
      <div class="header">
        <img src="http://localhost:4201/logo.png" alt="Logo" class="logo" />
        <h1>
          <span>Hello there,</span> Welcome to Cart 👋
        </h1>
      </div>
      <div class="content">
        <h2>Your Cart</h2>
        <table *ngIf="cartProducts.length > 0; else emptyCart">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let product of cartProducts; let i = index">
              <td>{{ product.name }}</td>
              <td>\${{ product.price }}</td>
              <td>
                <button (click)="removeFromCart(i)" class="btn">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
        <ng-template #emptyCart>
          <p>Your cart is currently empty. Add some products to see them here.</p>
        </ng-template>
      </div>
    </div>
  `,
})
export class AppComponent {
  cartProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  removeFromCart(index: number): void {
    this.cartProducts.splice(index, 1);
  }
}
