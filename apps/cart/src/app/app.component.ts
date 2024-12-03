import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { config } from 'libs/shared/src/index';
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart-component',
  template: `
    <div class="simple-card">
      <div class="header">
        <img [src]="logoUrl" alt="Logo" class="logo" />
        <h1>
          Cart App 👋
        </h1>
      </div>
      <div class="content">
        <table *ngIf="cartProducts.length > 0; else emptyCart">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let product of cartProducts; let i = index">
              <td>{{ product.name }}</td>
              <td>\${{ product.price }}</td>
              <td class="select-column">
                <button (click)="removeFromCart(i)">-</button>
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
  styles: [
    `
      .select-column {
        width: 2rem;
      }
      .select-column button:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class AppComponent {
  logoUrl = `${config.cartUrl}/logo.png`;
  cartProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  removeFromCart(index: number): void {
    this.cartProducts.splice(index, 1);
  }
}
