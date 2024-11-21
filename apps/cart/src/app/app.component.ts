import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart-entry',
  template: `<h1>Hello From Angular!</h1>>`,
})
export class RemoteEntryComponent {
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(RemoteEntryComponent, { injector: this.injector });
    customElements.define('app-cart-entry', webComponent);
  }
}
