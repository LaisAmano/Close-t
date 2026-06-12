# Close-t 👗✨

> Armário inteligente, economia sem dúvida.

**Close-t** é um app de moda que ajuda você a organizar digitalmente as roupas, sapatos e acessórios que já tem, montar combinações (outfits) e descobrir seu próprio estilo — sem precisar comprar mais.

Inspirado na estética dos anos 2000 (tons pastel, formas quadradas e pontudas), o Close-t une organização prática com um visual divertido e nostálgico.

---

## 🎯 Sobre o projeto

Muita gente tem o armário cheio e a sensação de "não ter nada para vestir". O Close-t resolve isso permitindo que você:

- Cadastre suas peças (foto da câmera, galeria ou link da web)
- Organize tudo por categoria, cor e estação
- Monte combinações arrastando as peças
- Receba sugestões de looks com IA, baseadas no que você já tem

**Público-alvo:** mulheres de 16 a 35 anos interessadas em moda, organização e consumo mais consciente.

---

## 🛠️ Tecnologias

**Frontend**
- React + Vite
- Tailwind CSS
- dnd-kit (drag and drop)

**Backend**
- FastAPI (Python)
- rembg (remoção automática de fundo das imagens)

**Banco de dados / Storage / Auth**
- Supabase

**IA**
- API da Anthropic (Claude) — sugestão de looks com base no armário do usuário

---

## ✅ MVP (versão inicial)

O foco da primeira versão é entregar um fluxo completo e funcional, sem complexidade excessiva:

- [ ] Cadastro e login de usuário
- [ ] Upload de peça (câmera ou galeria) com remoção automática de fundo
- [ ] Armário organizado por categoria, cor e estação (CRUD completo)
- [ ] Combinador visual: arrastar peças e montar uma colagem de look (sem avatar)
- [ ] Salvar e visualizar looks criados

---

## 🗺️ Roadmap (próximas fases)

Funcionalidades planejadas para depois do MVP:

- [ ] Sugestão de outfits via IA, com base nas peças cadastradas
- [ ] Upload de roupas a partir de links de lojas online
- [ ] Avatar/manequim personalizável para visualizar looks
- [ ] Compartilhamento de looks com outras pessoas
- [ ] Feed social com combinações de outros usuários

---

## 🎨 Identidade visual

- **Estilo:** retrô anos 2000
- **Paleta:** rosa, verde, azul e amarelo pastel (cor primária: rosa)
- **Formas:** quadradas e pontudas
- Cores pastel usadas como destaque (botões, ícones, acentos), com fundo neutro para manter boa legibilidade no uso prolongado

---

## 📸 Preview

> Em breve — prints e gif de demonstração do app.

---

## 🚀 Como rodar localmente

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Variáveis de ambiente

Crie um arquivo `.env` em cada pasta (`backend/` e `frontend/`) com:

```env
# backend/.env
SUPABASE_URL=
SUPABASE_KEY=
ANTHROPIC_API_KEY=

# frontend/.env
VITE_API_URL=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## 📋 Status

🚧 Em desenvolvimento — projeto de portfólio.

---

## 📄 Licença

Distribuído sob a licença MIT.
