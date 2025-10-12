# 📝 Guia de Personalização

Este documento lista tudo que você precisa personalizar antes de publicar o site.

## ✅ OBRIGATÓRIO - Informações do Apartamento

### 1. WiFi e Contatos (`data/apartment.ts`)

```typescript
wifi: {
  name: "Paris_8Impasse_5G", // ← ALTERE AQUI
  password: "BonjourParis2024!", // ← ALTERE AQUI
}

emergencyContact: {
  name: "Proprietário - Antonio", // ← ALTERE AQUI
  phone: "+33 6 12 34 56 78", // ← ALTERE AQUI
  whatsapp: "+55 11 98765-4321", // ← ALTERE AQUI
}
```

### 2. Contatos no Footer (`components/Footer.tsx`)

Linhas 78-93 - Substitua:
- WhatsApp: `+55 11 98765-4321`
- Telefone FR: `+33 6 12 34 56 78`
- Email: `contact@example.com`

### 3. Código da Porta (`data/apartment.ts`)

Linha 79 - Código de acesso ao prédio:
```typescript
problem: "Porta do prédio não abre",
solution: "Código da porta do prédio: #4589B" // ← ALTERE AQUI
```

## 🍽️ RECOMENDADO - Lugares Reais

### 4. Restaurantes, Cafés e Bares (`data/places.ts`)

Substitua os dados mockados pelos lugares REAIS perto do apartamento:

```typescript
{
  id: "r1",
  name: "Nome Real do Restaurante", // ← ALTERE
  address: "Endereço Real", // ← ALTERE
  phone: "+33 1 XX XX XX XX", // ← ALTERE
  googleMapsUrl: "https://maps.google.com/?q=...", // ← ALTERE
  tips: "Sua dica pessoal", // ← ALTERE
  // ... outros campos
}
```

**Dica:** Use o Google Maps para pegar:
- Endereço exato
- Telefone
- Horários
- Link do Maps
- Fotos (peça permissão ou use do Unsplash)

## 💰 IMPORTANTE - Links de Afiliados

### 5. Tours e Ingressos (`data/tours.ts`)

**Cadastre-se como afiliado:**
- [GetYourGuide](https://partner.getyourguide.com/)
- [Civitatis](https://www.civitatis.com/br/afiliados/)
- [Viator](https://www.viator.com/affiliates/)

Depois substitua em TODOS os tours:
```typescript
affiliateUrl: "https://www.getyourguide.com/", // ← COLOQUE SEU LINK DE AFILIADO
```

## 🗺️ Google Maps

### 6. Mapa na Homepage (`app/page.tsx`)

Linha 92 - Gere um novo embed no [Google Maps](https://www.google.com/maps):
1. Busque "8 Impasse Saint Sébastien, Paris"
2. Clique em "Compartilhar" > "Incorporar mapa"
3. Copie o código
4. Substitua o `src` do iframe

## 📸 Imagens

### 7. Fotos do Apartamento

Adicione fotos reais em `/public/images/`:
```
/public/images/
  ├── apartment/
  │   ├── living-room.jpg
  │   ├── bedroom.jpg
  │   ├── kitchen.jpg
  │   └── bathroom.jpg
  ├── places/
  │   └── [fotos dos lugares]
  └── tours/
      └── [fotos dos tours]
```

### 8. Ícones PWA

Crie ícones 192x192 e 512x512:
- Use [Favicon Generator](https://www.favicon-generator.org/)
- Salve como `/public/icon-192x192.png` e `/public/icon-512x512.png`

## 🌐 SEO e Metadata

### 9. Título e Descrição (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Guia do Apartamento - 8 Impasse Saint Sébastien, Paris", // ← PERSONALIZE
  description: "Seu guia completo para aproveitar Paris e o nosso apartamento", // ← PERSONALIZE
}
```

## 🎨 OPCIONAL - Design

### 10. Logo

Se quiser adicionar um logo:
- Salve em `/public/logo.png`
- Adicione no `Header.tsx`

### 11. Cores

Se quiser mudar as cores (`tailwind.config.ts`):
```typescript
colors: {
  primary: { 500: '#3b82f6' }, // Azul principal
  secondary: { 500: '#10b981' }, // Verde
  accent: { 500: '#f97316' }, // Laranja (tours)
}
```

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] WiFi e senha atualizados
- [ ] Contatos (WhatsApp, telefone, email) corretos
- [ ] Código da porta atualizado
- [ ] Pelo menos 3-5 lugares reais adicionados em cada categoria
- [ ] Links de afiliados configurados
- [ ] Google Maps embedado atualizado
- [ ] Fotos reais (se possível)
- [ ] Ícones PWA criados
- [ ] Testado em mobile e desktop
- [ ] Verificado em diferentes navegadores

## 🚀 Deploy

### Opções de Hospedagem (GRÁTIS):

1. **Vercel** (Recomendado)
   - [https://vercel.com](https://vercel.com)
   - Deploy automático do GitHub
   - Domínio grátis `.vercel.app`

2. **Netlify**
   - [https://netlify.com](https://netlify.com)
   - Similar ao Vercel

3. **GitHub Pages**
   - Mais complexo com Next.js
   - Requer configuração extra

### Como fazer deploy na Vercel:

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Clique em "Deploy"
4. Pronto! Site no ar em minutos

## 💡 DICAS EXTRAS

### Atualize regularmente:
- Verifique se restaurantes ainda existem
- Atualize horários sazonalmente
- Adicione novos lugares descobertos
- Peça feedback dos hóspedes

### Marketing:
- Compartilhe o link do site na descrição do Airbnb
- Envie o link após confirmação da reserva
- Cole QR Code impresso no apartamento
- Adicione aos favoritos do navegador do apartamento

### Analytics (opcional):
- Google Analytics para ver páginas mais visitadas
- Hotjar para ver onde hóspedes clicam
- Ajuste conteúdo baseado nos dados

---

**Dúvidas?** Consulte o README.md ou entre em contato!

