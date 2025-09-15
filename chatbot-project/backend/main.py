from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import httpx
from dotenv import load_dotenv
import logging

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

app = FastAPI(title="Chatbot API com Groq", description="API para chatbot com Groq AI")

# Configuração CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500", "http://localhost:5500", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Verificar se a chave existe
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY não encontrada no arquivo .env")

# URL da API Groq
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

class Message(BaseModel):
    text: str

class ChatResponse(BaseModel):
    reply: str
    status: str = "success"

@app.get("/")
async def root():
    return {"message": "Chatbot API com Groq está funcionando!", "provider": "Groq AI"}

@app.post("/chat", response_model=ChatResponse)
async def chat(message: Message):
    try:
        logger.info(f"Recebida mensagem: {message.text}")
        
        # Usar httpx para requisições assíncronas
        async with httpx.AsyncClient() as client:
            headers = {
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json"
            }
            
            data = {
                "model": "llama-3.1-8b-instant",  # Modelo atual gratuito e rápido do Groq
                "messages": [
                    {
                        "role": "system", 
                        "content": "Você é um assistente virtual útil, amigável e inteligente. Responda de forma clara e concisa em português brasileiro."
                    },
                    {"role": "user", "content": message.text}
                ],
                "max_tokens": 1000,
                "temperature": 0.7,
                "top_p": 1,
                "stream": False
            }
            
            response = await client.post(GROQ_API_URL, headers=headers, json=data, timeout=30.0)
            
            if response.status_code != 200:
                logger.error(f"Erro na API Groq: {response.status_code} - {response.text}")
                raise HTTPException(
                    status_code=response.status_code,
                    detail=f"Erro na API Groq: {response.text}"
                )
            
            result = response.json()
            
            # Validação da resposta
            if "choices" not in result or not result["choices"]:
                logger.error(f"Resposta inválida da API Groq: {result}")
                raise HTTPException(status_code=500, detail="Resposta inválida da API Groq")
            
            ai_response = result["choices"][0]["message"]["content"]
            logger.info(f"Resposta da IA: {ai_response[:100]}...")
            
            return ChatResponse(reply=ai_response)
            
    except httpx.TimeoutException:
        logger.error("Timeout na requisição para Groq")
        raise HTTPException(status_code=408, detail="Timeout na requisição")
    except Exception as e:
        logger.error(f"Erro interno: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Erro interno: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)