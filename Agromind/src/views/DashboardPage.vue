<template>
    <div class="app-container">
        <header>
            <div class="header-content">
                <div class="logo">
                    <img src="../assets/logo.png" alt="Logo">
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
            <h5 class="subtitle">Temperatura</h5>
            <h5 class="subtitle">Umidade</h5>
            <h5 class="subtitle">Bomba</h5>
            <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
            <p class="text">Lembre-se de sempre desligar a bomba para evitar correr riscos.</p>
            </label>
        </main>
        <footer>
            Todos os direitos reservados - Agromind 2025
        </footer>
    </div>
</template>

<script setup>
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
    max-width: 1200px;
    margin: 0 auto;
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
  -webkit-transition: .4s;
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
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #04b648;
}

input:focus + .slider {
  box-shadow: 0 0 1px #04b648;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.text {
    font-size: 1rem;
    margin-bottom: 20px;
    line-height: 1.6;
    padding: 20px;
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