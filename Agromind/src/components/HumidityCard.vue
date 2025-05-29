<template>
  <div class="humidity-card">
    <div class="card-header">
      <div class="status-group">
        <span class="status-text">Status:</span>
        <span class="status-indicator" :class="{ online: isOnline }"></span>
      </div>
      <span class="humidity-value">{{ humidity }}%</span>
    </div>
    <div class="chart-container">
      <canvas ref="humidityChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const humidity = ref(60);
const isOnline = ref(true);
const humidityChart = ref(null);
const chartInstance = ref(null);
const historicalData = ref([55, 60, 62, 58, 65, 70, 68]);

onMounted(() => {
  renderChart();
});

watch(historicalData, () => {
  if (chartInstance.value) {
    chartInstance.value.data.labels = historicalData.value.map((_, index) => index + 1);
    chartInstance.value.data.datasets = [{
      label: 'Umidade (%)',
      data: historicalData.value,
      fill: 'start',
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      tension: 0.3,
      pointRadius: 0,
      borderWidth: 2
    }];
    chartInstance.value.update();
  } else {
    renderChart();
  }
});

function renderChart() {
  const ctx = humidityChart.value.getContext('2d');
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }
  chartInstance.value = new Chart(ctx, {
    type: 'line',
    data: {
      labels: historicalData.value.map((_, index) => index + 1),
      datasets: [{
        label: '',
        data: historicalData.value,
        fill: 'start',
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false,
          grid: {
            display: false
          }
        },
        y: {
          display: false,
          grid: {
            display: false
          },
          min: 0,
          max: 100
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          backgroundColor: '#333',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: '#333',
          borderWidth: 1,
          displayColors: false,
          callbacks: {
            label: function(context) {
                return `Umidade: ${context.parsed.y}%`;
            }
          }
        }
      },
      elements: {
        line: {
          borderJoinStyle: 'round'
        }
      }
    }
  });
}

setInterval(() => {
  humidity.value = Math.floor(Math.random() * (90 - 30 + 1)) + 30;
  historicalData.value.push(humidity.value);
  if (historicalData.value.length > 10) {
    historicalData.value.shift();
  }
}, 3000);
</script>

<style scoped>
.humidity-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 35px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.status-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-text {
  font-size: 1.2rem;
  color: #333;
}

.status-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  font-size: 1rem;
}

.status-indicator.online {
  background-color: #28a745;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.6);
}

.humidity-value {
  font-size: 2rem;
  font-weight: bold;
}

.chart-container {
  flex-grow: 1;
  height: 200px;
  min-height: 150px;
  width: 100%;
}
</style>