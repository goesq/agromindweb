<template>
    <div class="app-container">
        <header>
            <div class="logo-container">
                <div class="logo">
                    <img src="../assets/logo.png" alt="Logo">
                    <h1 class="agromind"><strong>agromind</strong></h1>
                </div>
            </div>
        </header>
                    <h1 class="title">
                    Welcome,
                <br>Bem-vindo,
                <br>Benvenuto,
                <br>Bienvenido,
                <br>歡迎</h1>
        <main class="main-content">
            <div class="button-container">
                <router-link to="/login" class="login-button"><strong>Fazer login</strong></router-link>
            </div>
        </main>
    </div>
    <footer>
        Todos os direitos reservados - Agromind 2025
    </footer>
</template>

<script setup>
// Script (se necessário)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.logo-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%;
    padding: 20px 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.agromind {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    margin: 0;
    color: rgb(1, 34, 1);
}

img {
    width: auto;
    height: 60px; 
}

.main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 40px 20px;
}
.title {
    font-family: 'Inter', sans-serif;
    text-align: center;
    font-size: 53px;
    margin: 60px 0;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0px;
}

.login-button {
    height: 60px;
    width: 260px;
    background-color: rgb(57, 135, 236);
    color: white;
    border-radius: 10px;
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-button:hover {
    background-color: rgb(40, 110, 200);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-button:active {
    transform: translateY(0);
    box-shadow:rgba(0, 0, 0, 0.1);
}

footer {
    text-align: center;
    padding: 13px;
    background-color: white;
}
</style>