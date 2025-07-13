// Configurações do Servidor
Config = {};

// IP do servidor (para teste local)
Config.ServerIP = "localhost:30120";
// Quando hospedar, mude para: "SEU_IP_VPS:30120"

// Configurações de música
Config.Music = {
    song: "changes.mp3",
    volume: 0.2,
    autoplay: true
};

// Configurações de redes sociais
Config.Socials = [
    {
        name: "discord",
        label: "Discord",
        description: "Entre no nosso Discord!",
        link: "https://discord.gg/seuservidor"
    },
    {
        name: "website",
        label: "Website",
        description: "Visite nosso site oficial",
        link: "https://seuservidor.com"
    }
];

// Configurações do servidor
Config.Server = {
    name: "Angel RP",
    tagline: "Onde os sonhos se tornam realidade",
    description: "Uma cidade onde suas escolhas definem seu destino. Aqui você pode ser quem quiser: um empresário respeitado, um criminoso temido, ou um cidadão comum tentando sobreviver nas ruas de Los Santos."
};

// Dicas rápidas
Config.Tips = [
    "Use /help para comandos básicos",
    "Pressione F1 para abrir o menu",
    "Visite o Discord para suporte",
    "Leia as regras antes de jogar",
    "Use /report para reportar bugs",
    "Respeite todos os jogadores"
];

// Configurações de loading
Config.Loading = {
    messages: [
        "Carregando servidor...",
        "Preparando Los Santos...",
        "Conectando ao mundo...",
        "Carregando recursos...",
        "Inicializando sistemas...",
        "Bem-vindo ao Los Santos RP!"
    ],
    messageInterval: 3000 // 3 segundos
}; 