// Variáveis globais
let backgroundMusic;
let currentProgress = 0;
let loadingMessageIndex = 0;
let messageInterval;

// Inicialização quando a página carrega
$(document).ready(function() {
    initializeLoading();
    setupMusic();
    updateTime();
    updatePlayerCount();
    setupEventListeners();
    
    // Atualizar tempo a cada segundo
    setInterval(updateTime, 1000);
    
    // Atualizar contador de jogadores a cada 10 segundos
    setInterval(updatePlayerCount, 10000);
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var volumeSlider = document.getElementById('volumeSlider');
    if (audio && volumeSlider) {
        // Inicializa o volume
        audio.volume = volumeSlider.value / 100;
        // Atualiza o volume ao mover o slider
        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value / 100;
        });
    }
});

// Inicializar sistema de loading
function initializeLoading() {
    // Iniciar com 0%
    updateProgress(0);
    
    // Iniciar mensagens de loading
    startLoadingMessages();
    
    // Simular progresso (remover em produção)
    simulateProgress();
}

// Configurar música
function setupMusic() {
    try {
        // Criar elemento de áudio usando new Audio() (método que funciona no FiveM)
        backgroundMusic = new Audio("assets/media/" + Config.Music.song);
        
        // Configurar volume inicial
        backgroundMusic.volume = Config.Music.volume;
        
        // Configurar loop
        backgroundMusic.loop = true;
        
        // Tentar reproduzir automaticamente
        if (Config.Music.autoplay) {
            playMusic();
        }
        
        console.log("Música configurada com sucesso");
    } catch (error) {
        console.error("Erro ao configurar música:", error);
    }
}

// Reproduzir música
function playMusic() {
    if (backgroundMusic) {
        backgroundMusic.play().catch(error => {
            console.log("Erro ao reproduzir música automaticamente:", error);
            // Tentar novamente com interação do usuário
            document.addEventListener('click', function() {
                backgroundMusic.play();
            }, { once: true });
        });
    }
}

// Pausar/Reproduzir música
function toggleMusic() {
    if (backgroundMusic) {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            $("#playPauseBtn .btn-icon").text("⏸️");
        } else {
            backgroundMusic.pause();
            $("#playPauseBtn .btn-icon").text("▶️");
        }
    }
}

// Configurar volume
function setVolume(volume) {
    if (backgroundMusic) {
        backgroundMusic.volume = volume / 100;
    }
}

// Atualizar progresso
function updateProgress(percent) {
    currentProgress = Math.min(100, Math.max(0, percent));
    
    // Atualizar barra de progresso
    $("#progressFill").css("width", currentProgress + "%");
    $("#progressPercent").text(Math.round(percent) + '%');
    
    // Atualizar texto de loading
    $("#loadingText").text(Config.Loading.messages[loadingMessageIndex]);
}

// Simular progresso (para teste)
function simulateProgress() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        updateProgress(progress);
    }, 500);
}

// Iniciar mensagens de loading
function startLoadingMessages() {
    messageInterval = setInterval(() => {
        loadingMessageIndex = (loadingMessageIndex + 1) % Config.Loading.messages.length;
        $("#loadingText").text(Config.Loading.messages[loadingMessageIndex]);
    }, Config.Loading.messageInterval);
}

// Atualizar hora atual
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    $("#currentTime").text(timeString);
}

// Atualizar contador de jogadores
function updatePlayerCount() {
    if (Config.ServerIP && Config.ServerIP !== "YOUR_SERVER_IP_HERE") {
        // Buscar informações do servidor
        fetch("http://" + Config.ServerIP + "/info.json")
            .then(response => response.json())
            .then(info => {
                if (info.vars && info.vars.sv_maxClients) {
                    fetch("http://" + Config.ServerIP + "/players.json")
                        .then(response => response.json())
                        .then(players => {
                            if (Array.isArray(players)) {
                                $("#playersOnline").text(players.length + "/" + info.vars.sv_maxClients);
                            }
                        })
                        .catch(error => {
                            console.log("Erro ao buscar jogadores:", error);
                        });
                }
            })
            .catch(error => {
                console.log("Erro ao buscar informações do servidor:", error);
            });
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Botão play/pause
    $("#playPauseBtn").on("click", function() {
        toggleMusic();
    });
    
    // Controle de volume
    $("#volumeSlider").on("input", function() {
        setVolume($(this).val());
    });
    
    // Links sociais
    $(".social-btn").on("click", function(e) {
        e.preventDefault();
        const link = $(this).attr("href");
        if (link && link !== "#") {
            window.open(link, '_blank');
        }
    });
    
    // Interação para iniciar música (caso autoplay falhe)
    $(document).on("click keydown", function() {
        if (backgroundMusic && backgroundMusic.paused) {
            playMusic();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key.toLowerCase() === 'p') {
            var audios = document.querySelectorAll('audio');
            audios.forEach(function(audio) {
                audio.muted = !audio.muted;
            });
        }
    });
}

// Listener para mensagens do FiveM
window.addEventListener('message', function(event) {
    if (event.data.eventName === 'loadProgress') {
        const progress = parseInt(event.data.loadFraction * 100);
        updateProgress(progress);
    }
});

// Função para copiar texto para clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log("Texto copiado:", text);
    }).catch(err => {
        console.error("Erro ao copiar:", err);
    });
}

// Debug: Log de inicialização
console.log("Loading screen inicializada");
console.log("Configurações carregadas:", Config); 