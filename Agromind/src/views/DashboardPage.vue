<template>
  <div class="app-container">
    <header>
      <div class="header-content">
        <div class="logo">
          <router-link to="/principal">
            <img src="../assets/logo.png" alt="Logo">
          </router-link>
        </div>
        <nav class="navbar">
          <router-link to="/dashboard" class="nav-link"><strong>Dashboard</strong></router-link>
          <router-link to="/chatbot" class="nav-link"><strong>AgroBot</strong></router-link>
          <router-link to="/" class="nav-link"><strong>Sair</strong></router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <h1 class="title">Medidores</h1>

      <div v-if="loading" class="loading">Carregando...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else>
        <section>
          <h5 class="subtitle">Temperatura</h5>
          <div class="cards-grid">
            <div class="card">{{ temperatura }} °C</div>
          </div>

          <h5 class="subtitle">Umidade</h5>
          <div class="cards-grid">
            <div class="card">{{ umidade }}%</div>
          </div>

          <h5 class="subtitle">Umidade do Solo</h5>
          <div class="cards-grid">
            <div class="card">{{ sensorUmidSolo }}%</div>
          </div>

          <h5 class="subtitle">pH</h5>
          <div class="cards-grid">
            <div class="card">{{ ph }}</div>
          </div>

          <h5 class="subtitle">Bomba</h5>
          <div class="switch-container">
            <label class="switch">
              <input type="checkbox" :checked="bomba === 1" @change="toggleBomba">
              <span class="slider round"></span>
            </label>
          </div>
          <p class="text">Lembre-se de sempre desligar a bomba para evitar correr riscos.</p>
        </section>
      </div>
    </main>

    <footer>
      Todos os direitos reservados - Agromind 2025
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const temperatura = ref(null);
const umidade = ref(null);
const bomba = ref(null);
const sensorUmidSolo = ref(null);
const ph = ref(null);
const loading = ref(true);
const error = ref(null);

const apiURL = 'https://apiintegradoresp-production.up.railway.app';

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  console.log('Iniciando a chamada à API...'); // Log de início
  try {
    const response = await axios.get(`${apiURL}/dados`);
    console.log('Resposta da API:', response.data); // Log da resposta
    const dados = response.data;
    temperatura.value = dados.temperatura;
    umidade.value = dados.umidade;
    bomba.value = dados.bomba;
    sensorUmidSolo.value = dados.sensor_umidsolo;
    ph.value = dados.pH;
  } catch (e) {
    console.error('Erro ao carregar os dados:', e); // Log do erro
    error.value = 'Erro ao carregar os dados';
  } finally {
    loading.value = false;
    console.log('Chamada à API finalizada.'); // Log de finalização
  }
};

// Chama fetchData ao montar o componente
onMounted(() => {
  fetchData();
  setInterval(fetchData, 20000); // atualiza a cada 20s
});

const toggleBomba = async () => {
  const novoEstado = bomba.value === 1 ? 0 : 1;
  try {
    await axios.post(`${apiURL}/bomba`, { estado: novoEstado });
    await fetchData();
  } catch (e) {
    error.value = 'Erro ao atualizar a bomba';
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 10px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: left;
}

img {
  width: auto;
  height: 60px;
}

.navbar {
  display: flex;
  gap: 42px;
  padding: 9px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: rgb(57, 135, 236);
}

.nav-link.router-link-exact-active {
  color: rgb(57, 135, 236);
  border-bottom: 2px solid rgb(57, 135, 236);
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 40px 20px;
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.title {
  font-family: 'Inter', sans-serif;
  font-size: 3.2rem;
  margin-bottom: 30px;
  color: #333;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  justify-items: center;
  margin-bottom: 30px;
}

.card {
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #f9f9f9;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 300px;
}

.text {
  text-align: center;
  display: flex;
  justify-content: center;
  max-width: 400px;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
  padding: 20px;
}

.switch-container {
  display: flex;
  justify-content: center; /* Centraliza o switch horizontalmente */
  margin-bottom: 20px; /* Espaço abaixo do switch */
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #04b648;
}

input:focus + .slider {
  box-shadow: 0 0 1px #04b648;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

footer {
  text-align: center;
  padding: 15px;
  font-size: 0.8rem;
  color: #666;
  background-color: white;
  border-top: 1px solid #eee;
}
</style>