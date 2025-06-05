<template>
  <div class="app-container">
    <header>
      <div class="header-content">
        <div class="logo">
          <router-link to="/principal">
            <img src="../assets/logo.png" alt="Logo" />
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
      <h1 class="title">Olá, sou o AgroBot,<br />como posso ajudar?</h1>

      <div class="chat-messages">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="['message', msg.sender + '-message']"
        >
          <div class="message-content">{{ msg.content }}</div>
        </div>
      </div>

      <div class="chat-input">
        <input
          type="text"
          placeholder="Digite aqui..."
          v-model="userInput"
          @keyup.enter="sendMessage"
          :disabled="loading"
        />
        <button @click="sendMessage" :disabled="loading">
          {{ loading ? "Enviando..." : "Enviar" }}
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// Remover a configuração compilerOptions (não é necessária)
const userInput = ref("");
const messages = ref([]);
const loading = ref(false);

const sendMessage = async () => {
  if (!userInput.value.trim() || loading.value) return;

  const userMessage = userInput.value;
  messages.value.push({ sender: "user", content: userMessage });
  userInput.value = "";
  loading.value = true;

  try {
    const payload = {
      input_value: userMessage,
      output_type: "chat",
      input_type: "chat",
      session_id: "user_1", // você pode gerar IDs dinâmicos se quiser
    };

    const response = await axios.post(
      "https://nicolakskk-spaceintegrador.hf.space/api/v1/run/c75f677d-3bbd-4043-94bd-6df0d4aa4712",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15000,
      }
    );

    // Log pra ver o que a API retornou
    console.log("Resposta da API:", response.data);

    // Ajuste na forma de acessar a resposta
    const botReply = response.data.outputs && response.data.outputs[0]
      ? response.data.outputs[0].text // Aqui estou assumindo que o campo correto é "text" dentro de "outputs[0]"
      : "Sem resposta";

    messages.value.push({
      sender: "bot",
      content: typeof botReply === "string" ? botReply : JSON.stringify(botReply),
    });
  } catch (error) {
    console.error("Erro:", error);
    let errorMessage = "Erro de conexão com o serviço";
    if (error.code === "ECONNABORTED") {
      errorMessage = "Tempo de resposta excedido (15s)";
    } else if (error.response?.status === 404) {
      errorMessage = "Endpoint não encontrado";
    }
    messages.value.push({
      sender: "bot",
      content: `${errorMessage}. Por favor, tente novamente mais tarde.`,
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-family: "Inter", sans-serif;
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
  padding: 20px;
  width: 100%;
}

.title {
  font-family: "Inter", sans-serif;
  font-size: 3.2rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.chat-messages {
  width: 100%;
  padding: 0 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 400px;
  overflow-y: auto;
}

.message {
  width: 100%;
  padding: 12px 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.user-message {
  background-color: rgb(57, 135, 236);
  color: white;
  align-self: flex-end;
  max-width: 60%;
  border-radius: 18px 18px 4px 18px;
}

.bot-message {
  background-color: #eeebeb;
  color: #333;
  align-self: flex-start;
  max-width: 90%;
  border-radius: 18px 18px 18px 4px;
}

.chat-input {
  display: flex;
  width: 67%;
  padding: 20px;
  gap: 10px;
  box-sizing: border-box;
}

.chat-input input {
  flex-grow: 1;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
}

.chat-input button {
  padding: 0 20px;
  background-color: rgb(57, 135, 236);
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
}

.chat-input button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

/* Estiliza o componente langflow-chat para ficar fixo no canto inferior direito */
langflow-chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
}
</style>
