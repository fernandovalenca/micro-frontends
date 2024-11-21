import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
const Products = React.lazy(() => import('products/Module'));

export function App() {
  const angularRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const loadAngularComponent = async () => {
  //     const Component = await import('cart/Module');
  //     const element = document.createElement('app-cart-entry'); // Create an instance of the Angular component
  //     angularRef.current?.appendChild(element); // Append it to a div
  //   };

  //   loadAngularComponent();
  // }, []);
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div ref={angularRef} />
      {/* @ts-ignore */}
      <app-cart-entry></app-cart-entry>
      <Routes>
        <Route path="/" element={<NxWelcome title="dashboard" />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
