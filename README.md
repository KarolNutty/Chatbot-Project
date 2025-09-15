# 🤖 Chatbot IA - Assistente Virtual Inteligente

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Groq](https://img.shields.io/badge/Groq-000000?style=for-the-badge&logo=groq&logoColor=white)

### 🎯 Um chatbot moderno e responsivo com IA de última geração
*Interface elegante • Respostas instantâneas • Totalmente gratuito*

</div>

---

## 🌟 Demonstração

### 💬 Interface do Chat
![Chatbot Interface](projeto-chatbot/frontend/img/screenshot-chat.png)

### ✨ **Funcionalidades Visuais**
- 🤖 **Avatar personalizado da IA** (imagem da pasta `img/`)
- 🎨 **Design moderno** tipo WhatsApp com avatares
- 📸 **Fallback inteligente** (emoji se imagem não carregar)
- 🔄 **Avatar no loading** para consistência visual

---

## ✨ Funcionalidades Principais

<table>
<tr>
<td width="50%">

### 🎨 **Interface Moderna**
- ✅ Design tipo WhatsApp/Telegram
- ✅ Avatar personalizado da IA (pasta `img/`)
- ✅ Animações suaves e fluídas  
- ✅ Gradientes modernos
- ✅ Indicador de status em tempo real
- ✅ Totalmente responsivo (mobile-first)

</td>
<td width="50%">

### ⚡ **Performance & UX**
- ✅ Respostas instantâneas com Groq AI
- ✅ Loading animations elegantes
- ✅ Auto-resize do campo de texto
- ✅ Envio com Enter (Shift+Enter = nova linha)
- ✅ Timestamps em todas as mensagens

</td>
</tr>
<tr>
<td width="50%">

### 🛡️ **Robustez**
- ✅ Tratamento completo de erros
- ✅ Validação de dados
- ✅ Rate limiting inteligente
- ✅ Logs detalhados para debug
- ✅ Reconexão automática

</td>
<td width="50%">

### 🧠 **IA Avançada**
- ✅ Powered by Groq (ultra-rápido)
- ✅ Modelos Llama 3.1 e Mixtral
- ✅ Contexto inteligente
- ✅ Respostas em português brasileiro
- ✅ 100% gratuito

</td>
</tr>
</table>

---

## 🚀 Início Rápido

### 📋 Pré-requisitos

```bash
✅ Python 3.8+ instalado
✅ Conta gratuita no Groq (https://console.groq.com)
✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
```

### ⚡ Instalação em 3 minutos

#### 1️⃣ **Clone e configure o ambiente**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/chatbot-project.git
cd chatbot-project

# Ative o ambiente virtual
# Windows:
.venv\Scripts\activate
# Mac/Linux:
source .venv/bin/activate

# Instale dependências
cd chatbot-project/backend
pip install -r requirements.txt
```

#### 2️⃣ **Configure sua chave Groq**
```bash
# Crie o arquivo .env na pasta backend/
echo GROQ_API_KEY=gsk_sua_chave_aqui > .env
```

> 🔑 **Como obter sua chave Groq:**
> 1. Acesse [console.groq.com](https://console.groq.com)
> 2. Faça cadastro gratuito
> 3. Vá em "API Keys" → "Create API Key"
> 4. Copie a chave (começa com `gsk_`)

#### 3️⃣ **Execute e teste**
```bash
# Inicie o backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Em outro terminal, abra o frontend
# Navegue até chatbot-project/frontend/ 
# Adicione uma imagem de avatar em img/ai-avatar.png
# Abra index.html no navegador (ou use Live Server)
```

### 🎉 **Pronto! Seu chatbot está funcionando!**

---

## 🏗️ Arquitetura do Projeto

```
chatbot-project/
├── 📁 .venv/                     # Ambiente virtual Python
├── 📁 chatbot-project/
│   ├── 📁 backend/               # 🐍 API FastAPI
│   │   ├── 🐍 main.py           # Servidor principal
│   │   ├── 📄 requirements.txt   # Dependências Python  
│   │   └── 🔐 .env              # Chaves de API
│   └── 📁 frontend/             # 🎨 Interface web
│       ├── 🌐 index.html        # Estrutura HTML
│       ├── 🎨 style.css         # Estilos modernos
│       ├── ⚡ script.js         # Lógica JavaScript
│       └── 📁 img/              # 🖼️ Imagens e avatares
│           └── 🤖 ai-avatar.png # Avatar da IA
└── 📖 README.md                 # Documentação
```

---

## 🛠️ Stack Tecnológica

<div align="center">

### Backend
<table>
<tr>
<td align="center"><img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" width="100"><br><b>FastAPI</b><br><i>Framework web moderno</i></td>
<td align="center"><img src="https://python-poetry.org/images/logo-origami.svg" width="100"><br><b>Python</b><br><i>Linguagem principal</i></td>
<td align="center"><img src="https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg" width="100"><br><b>Groq</b><br><i>IA ultra-rápida</i></td>
</tr>
</table>

### Frontend  
<table>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="100"><br><b>HTML5</b><br><i>Estrutura semântica</i></td>
<td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="100"><br><b>CSS3</b><br><i>Estilos modernos</i></td>
<td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="100"><br><b>JavaScript</b><br><i>Interatividade</i></td>
</tr>
</table>

</div>

---

## ⚙️ Configuração Avançada

### 🤖 **Modelos de IA Disponíveis**

| Modelo | Velocidade | Inteligência | Uso Recomendado |
|--------|------------|--------------|-----------------|
| `llama-3.1-8b-instant` | ⚡⚡⚡ | ⭐⭐⭐ | Chat geral, respostas rápidas |
| `llama-3.1-70b-versatile` | ⚡⚡ | ⭐⭐⭐⭐⭐ | Tarefas complexas, análises |
| `mixtral-8x7b-32768` | ⚡⚡ | ⭐⭐⭐⭐ | Contexto longo, programação |
| `gemma2-9b-it` | ⚡⚡⚡ | ⭐⭐⭐ | Alternativa rápida |

**Para alterar o modelo**, edite a linha 43 em `backend/main.py`:
```python
"model": "llama-3.1-70b-versatile",  # Modelo mais inteligente
```

### 🎨 **Personalização Visual**

#### Alterar avatar da IA:
```bash
# Substitua a imagem na pasta img/
frontend/img/ai-avatar.png  # Tamanho recomendado: 32x32px ou maior
```

#### Personalizar cores do tema:
```css
/* Em frontend/style.css */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --chat-bg: #f8f9fa;
  --user-bubble: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --bot-bubble: white;
}
```

#### Customizar avatar:
```css
/* Alterar tamanho do avatar */
.avatar {
    width: 40px;   /* Tamanho maior */
    height: 40px;  /* Tamanho maior */
}
```

#### Customizar comportamento da IA:
```python
# Em backend/main.py, linha 42
{
  "role": "system", 
  "content": "Você é um especialista em [SEU DOMINIO]. Seja sempre [SEU ESTILO]..."
}
```

---

## 🔧 Scripts Úteis

### 📊 **Monitoramento**
```bash
# Ver logs em tempo real
tail -f logs/chatbot.log

# Monitorar uso da API
curl http://127.0.0.1:8000/health

# Testar endpoint
curl -X POST http://127.0.0.1:8000/chat \
     -H "Content-Type: application/json" \
     -d '{"text": "Olá!"}'
```

### 🧪 **Desenvolvimento**
```bash
# Modo debug
uvicorn main:app --reload --log-level debug

# Formatar código
black backend/main.py
prettier frontend/script.js

# Testes
python -m pytest tests/
```

---

## 📈 Performance & Limites

### 🚀 **Groq AI - Limites Gratuitos**
- **Llama 3.1 8B**: 30.000 tokens/min
- **Llama 3.1 70B**: 6.000 tokens/min  
- **Mixtral**: 5.000 tokens/min
- **Requests**: ~1000/dia

### ⚡ **Velocidade Típica**
- Resposta da IA: ~0.5-2 segundos
- Loading da interface: ~100ms
- Primeira carga: ~500ms

---

## 🐛 Troubleshooting

<details>
<summary><b>🔧 Problemas Comuns</b></summary>

### ❌ **Erro: "GROQ_API_KEY não encontrada"**
```bash
# Verificar se arquivo .env existe
ls backend/.env

# Verificar conteúdo
cat backend/.env
# Deve mostrar: GROQ_API_KEY=gsk_...
```

### ❌ **Erro: "Could not import module 'main'"**  
```bash
# Executar da pasta correta
cd chatbot-project/backend
uvicorn main:app --reload
```

### ❌ **Frontend não conecta ao backend**
```bash
# Verificar se backend está rodando
curl http://127.0.0.1:8000
# Deve retornar: {"message": "Chatbot API com Groq está funcionando!"}

# Verificar CORS no console do navegador (F12)
```

### ❌ **IA não responde / demora muito**
- ✅ Verificar se chave Groq é válida
- ✅ Tentar modelo diferente (`llama-3.1-8b-instant`)
- ✅ Verificar limite de tokens

</details>

---

## 🚀 Deploy & Produção

### 🌐 **Deploy Heroku**
```bash
# Adicionar arquivo Procfile
echo "web: uvicorn main:app --host 0.0.0.0 --port \$PORT" > Procfile

# Deploy
git add .
git commit -m "Deploy chatbot"
heroku create seu-chatbot
git push heroku main
```

### 🐳 **Docker**
```dockerfile
FROM python:3.11-slim
COPY backend/ /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## 📝 Roadmap

### 🔄 **Em Desenvolvimento**
- [ ] 💾 Histórico de conversas persistente
- [ ] 📁 Upload de arquivos (PDF, imagem)  
- [ ] 🌙 Modo escuro/claro
- [ ] 👥 Múltiplas conversas/abas
- [ ] 🔊 Síntese de voz (TTS)
- [ ] 👤 Avatar personalizado do usuário

### 🎯 **Futuras Melhorias**
- [ ] 🔌 Plugin system para extensões
- [ ] 📊 Dashboard de analytics
- [ ] 🌍 Suporte multi-idioma
- [ ] 🤝 Integração Slack/Discord
- [ ] 📱 App mobile (React Native)

---

## 🤝 Contribuição

### 💡 **Como Contribuir**
1. 🍴 Fork o projeto
2. 🌿 Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. 💻 Faça suas mudanças
4. ✅ Teste tudo funcionando
5. 📝 Commit (`git commit -am 'Adiciona nova funcionalidade'`)
6. 🚀 Push (`git push origin feature/nova-funcionalidade`)
7. 🔄 Abra um Pull Request

### 🐛 **Reportar Bugs**
Encontrou um bug? [Abra uma issue](https://github.com/seu-usuario/chatbot-project/issues) com:
- 📱 Sistema operacional
- 🐍 Versão Python
- 🔍 Passos para reproduzir
- 📸 Screenshots se possível

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License - você pode usar, modificar e distribuir livremente! 🎉
```

---

## 🙏 Créditos & Agradecimentos

### 🏆 **Tecnologias Utilizadas**
- [FastAPI](https://fastapi.tiangolo.com/) - Framework web Python
- [Groq](https://groq.com/) - Inferência de IA ultra-rápida  
- [Font Awesome](https://fontawesome.com/) - Ícones modernos

### 💎 **Inspiração**
- ChatGPT Interface
- WhatsApp Web
- Telegram Web

---

<div align="center">

### 🌟 **Gostou do projeto? Dê uma estrela!** ⭐

**Desenvolvido com ❤️ por [Seu Nome]**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)

---
*"A melhor forma de prever o futuro é criá-lo"* ✨

</div>
