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

</script>

<div class="simple-card">
  <div class="header">
    <img src="{logoUrl}" alt="Logo" class="logo" />
    <h1>
      Products App 👋
    </h1>
  </div>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th></th>
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
  </div>
</div>

<style>
  .select-column {
    width: 2rem;
  }
</style>
