import { ApartmentInfo } from "@/types";

export const apartmentInfo: ApartmentInfo = {
  wifi: {
    name: "Paris_8Impasse_5G",
    password: "BonjourParis2024!",
  },
  address: "8 Impasse Saint Sébastien, 75011 Paris, França",
  checkIn: "15h00 - Chaves na caixa de chaves na porta do apartamento (código enviado no dia) | Depósito de bagagens a partir das 13h",
  checkOut: "11h00 - Deixe as chaves na caixa de chaves na porta do apartamento",
  emergencyContact: {
    name: "Proprietário - Antonio",
    phone: "+33 6 12 34 56 78",
    whatsapp: "+55 11 98765-4321",
  },
  rules: [
    "🚭 Apartamento 100% não fumante",
    "🎉 Festas não são permitidas",
    "🔇 Silêncio após 22h (respeite os vizinhos)",
    "🗑️ Separe o lixo: reciclável e orgânico",
    "🔑 Não perca as chaves! Taxa de reposição: €150",
    "🧹 Deixe o apartamento organizado na saída",
    "👥 Máximo de hóspedes: conforme reserva",
  ],
  appliances: [
    {
      name: "☕ Máquina de Café Nespresso",
      instructions: "Coloque a cápsula, feche a alavanca, aperte o botão.",
    },
    {
      name: "🍳 Fogão de Indução",
      instructions: "Use apenas panelas com fundo magnético. Toque no ícone de cadeado por 3 segundos para destrancar, depois selecione a zona e temperatura.",
    },
    {
      name: "🍽️ Lava-louças Bosch",
      instructions: "Coloque o detergente na porta, selecione programa ECO (mais econômico), aperte iniciar. Ciclo dura ~2h.",
    },
    {
      name: "🧺 Máquina de Lavar Roupa",
      instructions: "Detergente em pó na gaveta da esquerda. Programas: Cotton 40° para roupas normais, Delicate para roupas delicadas. Máx 6kg.",
    },
    {
      name: "❄️ Geladeira",
      instructions: "Ajuste a temperatura com o controle interno (recomendado: 4°C). Congelador à -18°C.",
    },
    {
      name: "🌡️ Aquecimento Central",
      instructions: "Termostato na parede da sala. Gire para cima para aquecer (recomendado: 20-21°C). Desliga automaticamente no verão.",
    },
    {
      name: "📺 Smart TV",
      instructions: "Netflix, Prime Video e YouTube já configurados. Use o controle remoto - botão Home para menu principal.",
    },
  ],
  troubleshooting: [
    {
      problem: "WiFi não conecta",
      solution: "1. Desligue o roteador da tomada por 30 segundos e ligue novamente. 2. Senha: BonjourParis2024! (case-sensitive). 3. Se persistir, me contate no WhatsApp.",
    },
    {
      problem: "Água quente não sai",
      solution: "Aguarde 10 minutos - o boiler pode estar reaquecendo. Se não funcionar após 30 min, verifique o disjuntor no quadro de luz (corredor). Botão do boiler deve estar 'ligado'.",
    },
    {
      problem: "Aquecimento não funciona",
      solution: "Verifique se o termostato está acima de 20°C. No inverno, pode demorar 15 minutos para aquecer. Se os radiadores estiverem frios, me contate.",
    },
    {
      problem: "Chave não abre a porta",
      solution: "A porta é blindada e precisa de técnica: empurre a porta levemente para dentro ENQUANTO gira a chave. Faça força ao girar.",
    },
    {
      problem: "Disjuntor caiu",
      solution: "Quadro de luz está no corredor. Desligue alguns aparelhos (principalmente: aquecedor, ar-cond, secador) e religue o disjuntor.",
    },
    {
      problem: "Porta do prédio não abre",
      solution: "Código da porta do prédio: #4589B. Digite o código e empurre quando ouvir o bip. Se não funcionar, toque o interfone do apartamento 8.",
    },
  ],
};

