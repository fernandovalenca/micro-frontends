// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Ensure this is correctly set up
import { RemoteEntryComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';

const bootstrapAngularElement = () => {
  const injector = Injector.create({ providers: [] }); // Create an injector
  const webComponent = createCustomElement(RemoteEntryComponent, { injector });
  
  // Register the custom element
  customElements.define('app-cart-entry', webComponent);
};

// Call bootstrap function to register the custom element
bootstrapApplication(RemoteEntryComponent, appConfig)
  .then(() => {
    bootstrapAngularElement(); // Register the custom element after bootstrapping
  })
  .catch((err) => console.error(err));