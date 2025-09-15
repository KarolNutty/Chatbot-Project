// Configurações
const API_URL = "http://127.0.0.1:8000/chat";
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcome-time').textContent = getCurrentTime();
    userInput.focus();
});

// Auto-resize do textarea conforme o usuário digita
userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});

// Enviar mensagem com Enter (Shift+Enter para nova linha)
userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Função para obter hora atual formatada
function getCurrentTime() {
    return new Date().toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

// Função para adicionar mensagem ao chat COM AVATAR
function addMessage(content, isUser = false, isError = false) {
    const messageDiv = document.createElement('div');
    
    if (isError) {
        messageDiv.className = 'error-message';
        messageDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>${content}</span>
        `;
    } else {
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        if (isUser) {
            // Mensagem do usuário (sem avatar)
            messageDiv.innerHTML = `
                <div class="message-bubble">
                    ${content}
                    <div class="message-time">${getCurrentTime()}</div>
                </div>
            `;
        } else {
            // Mensagem da IA (COM avatar)
            messageDiv.innerHTML = `
                <div class="avatar">
                    <img src="img/ai-avatar.png" alt="IA" onerror="this.style.display='none'">
                </div>
                <div class="message-bubble">
                    ${content}
                    <div class="message-time">${getCurrentTime()}</div>
                </div>
            `;
        }
    }
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para mostrar indicador de loading COM AVATAR
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.id = 'loading-indicator';
    loadingDiv.innerHTML = `
        <div class="avatar">
            <img src="img/ai-avatar.png" alt="IA" onerror="this.style.display='none'">
        </div>
        <div class="loading-bubble">
            <div class="loading-dots">
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </div>
        </div>
    `;
    chatBox.appendChild(loadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para remover indicador de loading
function removeLoading() {
    const loading = document.getElementById('loading-indicator');
    if (loading) {
        loading.remove();
    }
}

// Função principal para enviar mensagem
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message || sendBtn.disabled) return;

    // Adicionar mensagem do usuário ao chat
    addMessage(message, true);
    
    // Limpar input e desabilitar botão para evitar spam
    userInput.value = "";
    userInput.style.height = 'auto';
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    // Mostrar loading enquanto processa
    showLoading();

    try {
        // Fazer requisição para a API
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: message })
        });

        removeLoading();

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `Erro ${response.status}`);
        }

        // Processar resposta e adicionar ao chat
        const data = await response.json();
        addMessage(data.reply);

    } catch (error) {
        removeLoading();
        console.error('Erro:', error);
        addMessage(
            `Desculpe, ocorreu um erro: ${error.message}. Tente novamente.`,
            false,
            true
        );
    } finally {
        // Reabilitar botão e focar no input
        sendBtn.disabled = false;
        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
        userInput.focus();
    }
}

// Verificar status da API
async function checkAPIStatus() {
    try {
        const response = await fetch("http://127.0.0.1:8000/");
        const indicator = document.querySelector('.status-indicator');
        if (response.ok) {
            indicator.style.background = '#4CAF50';
            indicator.title = 'Online';
        } else {
            indicator.style.background = '#f44336';
            indicator.title = 'Offline';
        }
    } catch (error) {
        const indicator = document.querySelector('.status-indicator');
        indicator.style.background = '#f44336';
        indicator.title = 'Offline';
    }
}

// Verificar status da API a cada 30 segundos
setInterval(checkAPIStatus, 30000);
checkAPIStatus(); // Verificação inicial