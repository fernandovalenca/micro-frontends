import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-cart-component',
  template: `
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
        <h1>
            <span> Hello there, </span>
            Welcome Cart 👋
          </h1>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent { }
