<template>
  <div class="simple-card">
    <div class="header">
      <img :src="logoUrl" alt="Logo" class="logo" />
      <h1>Budget App</h1>
      <p>Track your expenses and budget effectively.</p>
    </div>

    <div class="content">
      <h2>Budget Input</h2>
      <input type="number" placeholder="Enter your budget" v-model="budget" />

      <h2>Budget vs Expenses Chart</h2>
      <div id="chart">
        <!-- Placeholder for Chart -->
        <canvas id="budgetChart"></canvas>
      </div>

      <h2>Expense List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in expenses" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import '@micro-frontends/shared-styles';
import { config } from '@micro-frontends/shared';

const logoUrl = `${config.budgetUrl}/assets/logo.png`;

export default {
  data() {
    return {
      logoUrl,
      budget: 0,
      expenses: [
        { name: 'Rent', price: 1000 },
        { name: 'Groceries', price: 200 },
      ],
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('budgetChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Remaining Budget', 'Expenses'],
          datasets: [
            {
              data: [this.budget - this.expenses.reduce((a, b) => a + b.price, 0), this.expenses.reduce((a, b) => a + b.price, 0)],
              backgroundColor: ['#007bff', '#ff4d4d'],
            },
          ],
        },
      });
    },
  },
};
</script>
