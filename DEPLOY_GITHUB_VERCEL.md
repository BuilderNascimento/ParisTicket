# 🚀 Deploy no GitHub + Vercel - Passo a Passo

## 📋 Pré-requisitos

- ✅ Conta no GitHub (github.com)
- ✅ Conta na Vercel (vercel.com) - pode fazer login com GitHub

---

## 1️⃣ Preparar o Repositório Local

### Já está pronto! ✅

O Git já foi inicializado e os arquivos estão commitados.

Para verificar:
```bash
git status
git log --oneline
```

---

## 2️⃣ Criar Repositório no GitHub

### Opção A: Pelo site (Recomendado)

1. Acesse: https://github.com/new
2. **Nome do repositório**: `iss-paris-guide` (ou o nome que preferir)
3. **Descrição**: Guide for ISS Paris Apartment - Marais, Paris
4. **Visibilidade**: 
   - ✅ **Private** (se quiser manter privado)
   - ⚪ Public (se quiser compartilhar)
5. ❌ **NÃO** marque "Initialize with README" (já temos)
6. ❌ **NÃO** adicione .gitignore (já temos)
7. Clique em **"Create repository"**

### Opção B: Pelo GitHub CLI (se tiver instalado)

```bash
gh repo create iss-paris-guide --private --source=. --remote=origin --push
```

---

## 3️⃣ Conectar e Fazer Push

Após criar o repositório no GitHub, você verá uma página com instruções.

### Copie e execute estes comandos:

```bash
# Adicionar o remote (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/iss-paris-guide.git

# Fazer push
git branch -M main
git push -u origin main
```

**Exemplo**:
```bash
# Se seu usuário for "antonio"
git remote add origin https://github.com/antonio/iss-paris-guide.git
git branch -M main
git push -u origin main
```

Você será solicitado a fazer login no GitHub (use seu token pessoal se necessário).

---

## 4️⃣ Deploy na Vercel

### Passo 1: Acessar Vercel
1. Acesse: https://vercel.com
2. Faça login com sua conta do GitHub (recomendado)
3. Autorize a Vercel a acessar seus repositórios

### Passo 2: Importar Projeto
1. Clique em **"New Project"** ou **"Add New..."** → **"Project"**
2. Você verá uma lista dos seus repositórios do GitHub
3. Encontre **"iss-paris-guide"** (ou o nome que você deu)
4. Clique em **"Import"**

### Passo 3: Configurar Deploy
A Vercel vai detectar automaticamente que é um projeto Next.js!

**Configurações**:
- ✅ **Framework Preset**: Next.js (detectado automaticamente)
- ✅ **Build Command**: `next build` (padrão)
- ✅ **Output Directory**: `.next` (padrão)
- ✅ **Install Command**: `npm install` (padrão)

**Variáveis de Ambiente** (se necessário no futuro):
- Por enquanto, não precisa de nenhuma

### Passo 4: Deploy!
1. Clique em **"Deploy"**
2. Aguarde 2-3 minutos (primeira vez demora um pouco)
3. 🎉 **Pronto!** Seu site está no ar!

---

## 5️⃣ Acessar seu Site

Após o deploy, você receberá:

### URL de Produção:
```
https://iss-paris-guide.vercel.app
```
Ou algo similar (a Vercel gera automaticamente)

### URLs Adicionais:
- URL de preview para cada commit
- URL customizada (se quiser configurar domínio próprio)

---

## 6️⃣ Domínio Customizado (Opcional)

Se quiser usar um domínio próprio:

1. Na Vercel, vá em: **Settings** → **Domains**
2. Adicione seu domínio (ex: `guia.issparisbistro.com`)
3. Configure os DNS conforme instruções da Vercel
4. Aguarde propagação (15 min - 24h)

**Exemplo de domínios**:
- `paris.seudominio.com`
- `guia.issparisbistro.com`
- `iss-paris.com`

---

## 🔄 Atualizar o Site (Futuras Mudanças)

Sempre que você fizer alterações:

```bash
# 1. Adicionar arquivos modificados
git add .

# 2. Fazer commit
git commit -m "Descrição da mudança"

# 3. Fazer push
git push origin main
```

**A Vercel vai fazer deploy automaticamente!** 🚀

---

## 📱 Verificar Deploy

### No site da Vercel:
1. Acesse seu projeto
2. Veja o status do deploy em tempo real
3. Logs completos se houver erro

### Status:
- 🟡 **Building** - Está compilando
- 🟢 **Ready** - Deploy concluído com sucesso
- 🔴 **Error** - Houve algum erro (veja os logs)

---

## 🐛 Possíveis Problemas

### Erro: "Git not found"
```bash
# Instalar Git (se ainda não tiver)
# Windows: https://git-scm.com/download/win
```

### Erro: "Authentication failed"
Use um Personal Access Token do GitHub:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Marque: `repo` (full control)
4. Use o token como senha

### Erro no build da Vercel
- Verifique os logs na Vercel
- Geralmente é erro de dependências ou TypeScript
- Este projeto está OK, não deve dar erro!

---

## ✅ Checklist Final

Antes de fazer deploy, confirme:

- [ ] .gitignore criado e configurado
- [ ] Git inicializado (`git init`)
- [ ] Arquivos commitados (`git commit`)
- [ ] Repositório criado no GitHub
- [ ] Remote adicionado (`git remote add origin`)
- [ ] Push feito (`git push`)
- [ ] Projeto importado na Vercel
- [ ] Deploy concluído com sucesso

---

## 🎉 Depois do Deploy

Seu guia estará disponível em:
- **Homepage**: https://seu-projeto.vercel.app/
- **Tours**: https://seu-projeto.vercel.app/tours
- **Navbar com 5 idiomas** funcionando
- **Links de afiliado** ativos

**Compartilhe o link com seus hóspedes!** 🏠✨

---

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Docs**: https://docs.github.com

---

**Boa sorte com o deploy!** 🚀🇫🇷

