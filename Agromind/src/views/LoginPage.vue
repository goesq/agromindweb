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
        <main class="main-content">
            <h1 class="title">Faça seu login</h1>
            <form class="login-form" @submit.prevent="handleLogin">
                <div class="input-group">
                    <label for="username"><strong>Usuário</strong></label>
                    <input 
                        type="text" 
                        id="username" 
                        v-model="username" 
                        placeholder="Digite seu usuário"
                        required
                        :class="{ 'input-error': loginError }"
                    >
                </div>
                <div class="input-group">
                    <label for="password"><strong>Senha</strong></label>
                    <input 
                        type="password" 
                        id="password" 
                        v-model="password" 
                        placeholder="Digite sua senha"
                        required
                        :class="{ 'input-error': loginError }"
                    >
                </div>
                
                <!-- Mensagem de feedback -->
                <div v-if="loginMessage" class="message" :class="{ success: loginSuccess, error: loginError }">
                    {{ loginMessage }}
                </div>

                <div class="help">
                    <h5>Problemas com login? Clique aqui</h5>
                </div>
                <button type="submit" class="login-button" :disabled="loading">
                    <span v-if="!loading"><strong>Fazer login</strong></span>
                    <span v-else class="loader"></span>
                </button>
            </form>
        </main>
<router-link to="/" class="backpage"><strong>← Voltar</strong></router-link>
        <footer>
            Todos os direitos reservados - Agromind 2025
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const loading = ref(false);
const loginMessage = ref('');
const loginSuccess = ref(false);
const loginError = ref(false);

const handleLogin = async () => {
    loginMessage.value = '';
    loginError.value = false;
    loading.value = true;

    try {
        // Simula delay para demonstração
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await fetch(
            `http://localhost:3000/users?username=${username.value}&password=${password.value}`
        );
        const userData = await response.json();

        if (userData.length > 0) {
            loginMessage.value = `Bem-vindo, ${userData[0].name || username.value}!`;
            loginSuccess.value = true;
            // Redirecionamento ou lógica após login aqui
        } else {
            loginMessage.value = 'Usuário ou senha incorretos';
            loginError.value = true;
        }
    } catch (error) {
        loginMessage.value = 'Erro ao conectar ao servidor';
        loginError.value = true;
        console.error('Erro:', error);
    } finally {
        loading.value = false;
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
    font-size: 3.2rem;
    margin-bottom: 30px;
    color: #333;
}

.login-form {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-group label {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #555;
}

.input-group input {
    height: 45px;
    padding: 0 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.input-group input:focus {
    border-color: rgb(57, 135, 236);
    outline: none;
    box-shadow: 0 0 0 2px rgba(57, 135, 236, 0.2);
}

.input-group input.input-error {
    border-color: #ff4444;
}

.help {
    color: rgb(12, 83, 190);
    text-decoration: underline;
    text-align: center;
    font-size: 14px;
    margin: 5px 0;
    cursor: pointer;
}

.help:hover {
    color: rgb(9, 65, 150);
}

.login-button {
    height: 50px;
    width: 100%;
    background-color: rgb(57, 135, 236);
    color: white;
    border: none;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-button:hover {
    background-color: rgb(40, 110, 200);
}

.login-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.message {
    padding: 12px;
    border-radius: 6px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
}

.message.success {
    background-color: #e8f5e9;
    color: #2e7d32;
}

.message.error {
    background-color: #ffebee;
    color: #d32f2f;
}

.loader {
    border: 3px solid #f3f3f3;
    border-top: 3px solid rgb(57, 135, 236);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.backpage {
    text-decoration: none;
    color: #333;
    margin-left: 60px;
    margin-bottom: 30px;
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