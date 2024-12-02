<script>
  import '@micro-frontends/shared-styles';
  import { config } from '@micro-frontends/shared';
  let products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  const selectedProducts = new Set();
  const logoUrl = `${config.productsUrl}/assets/logo.png`;

  $: selectedCount = selectedProducts.size;

  function toggleSelection(product) {
    if (selectedProducts.has(product.id)) {
      selectedProducts.delete(product.id);
    } else {
      selectedProducts.add(product.id);
    }
    selectedCount = selectedProducts.size;
  }

  function addToCart() {
    if (selectedCount > 0) {
      const selected = products.filter(product => selectedProducts.has(product.id));
      alert(`Added ${selected.map(p => p.name).join(', ')} to cart!`);
    }
  }
</script>

<div class="simple-card">
  <div class="header">
    <img src="{logoUrl}" alt="Logo" class="logo" />
    <h1>
      <span>Hello there,</span> Welcome to Products 👋
    </h1>
  </div>
  <div class="content">
    <h2>Product List</h2>
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each products as product}
          <tr>
            <td class="select-column">
              <input type="checkbox" on:change={() => toggleSelection(product)} />
            </td>
            <td>{product.name}</td>
            <td>${product.price}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <button class="btn" disabled={selectedCount === 0} on:click={addToCart}>
      Add to Cart
    </button>
  </div>
</div>
