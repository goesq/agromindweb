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
            <h1 class="title">Últimas Atualizações</h1>
            <ul class="update-list">
                <li>O <strong>Agromind</strong> passou por melhorias importantes para tornar o monitoramento no<br> <strong>agronegócio</strong> ainda mais eficiente.</li>
                <li>Agora com <strong>ESP32</strong> embarcado, os medidores realizam leituras de temperatura e umidade<br> com mais <strong>precisão</strong>, enviando os dados em <strong>tempo real</strong> para a plataforma.</li>
                <li>Com Wi-Fi e Bluetooth integrados, é possível <strong>automatizar</strong> processos e acompanhar tudo<br> remotamente, reduzindo custos e aumentando o controle no campo.</li>
                <li>O novo <strong>app Agromind</strong> facilita o acesso às informações, permitindo configurar sensores<br> e receber alertas diretamente no <strong>celular</strong>.</li>
            </ul>
            
            <h1 class="title">Sobre</h1>
            <div class="about-content">
                <p class="text"><strong>Agromind</strong> foi desenvolvido com foco em modernizar e <strong>automatizar</strong> os processos<br>de fiscalização no setor do <strong>agronegócio</strong>. A solução concentra-se na automação<br>de sprinters — módulos sensores inteligentes que monitoram variáveis<br>ambientais fundamentais para o bom desempenho das atividades no campo.</p>
                
                <p class="text">Utilizando <strong>ESP32</strong> como base dos medidores, o sistema garante alta eficiência<br>na coleta e transmissão de dados, com conectividade robusta e baixo consumo<br>de energia. Os sensores foram projetados especialmente para medir<br>temperatura e umidade, fornecendo informações em <strong>tempo real</strong>.</p>
                
                <p class="text">Totalmente voltado ao <strong>agronegócio</strong>, o <strong>Agromind</strong> alia tecnologia de ponta<br>à simplicidade de uso, oferecendo uma solução <strong>confiável</strong> e escalável<br>para produtores, técnicos e gestores do campo.</p>

                <p class="text">O <strong>Agromind</strong> segue firme no propósito de levar tecnologia <strong>simples</strong> e <br><strong>inteligente</strong> ao agronegócio brasileiro.</p>
            </div>
            <h1 class="title">Contamos com</h1>
            <ul class="update-list">
                <li><strong>IA</strong> especializada em agro.</li>
                <li>Controle <strong>facilitado</strong>.</li>
                <li>Atendimento online <strong>24/7</strong>.</li>
            </ul>
            
            <router-link to="/chatbot" class="login-button"><strong>Conversar com o Agrobot</strong></router-link>
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

.update-list {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 30px;
    padding-left: 20px;
    list-style-type: none;
}

.update-list li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 20px;
}

.update-list li::before {
    content: "•";
    color: rgb(57, 135, 236);
    font-weight: bold;
    position: absolute;
    left: 0;
}

.about-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.text {
    font-size: 1.2rem;
    margin-bottom: 20px;
    line-height: 1.6;
}

.login-button {
    height: 50px;
    width: 300px;
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
    text-decoration: none;
    margin-top: 20px;
}

.login-button:hover {
    background-color: rgb(40, 110, 200);
    transform: translateY(-2px);
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