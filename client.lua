-- Client script para a tela de loading
-- Este arquivo é necessário para compatibilidade com FiveM

print("^2[LORE-LOADING] ^7Loading screen carregada com sucesso!")

-- Função para enviar progresso para a NUI (se necessário)
function SendProgressToNUI(progress)
    SendNUIMessage({
        eventName = 'loadProgress',
        loadFraction = progress
    })
end

-- Evento quando o jogador entra no servidor
AddEventHandler('playerSpawned', function()
    print("^2[LORE-LOADING] ^7Jogador entrou no servidor!")
end)

-- Debug: Log quando o script carrega
Citizen.CreateThread(function()
    SetNuiFocus(true, true)
    print("^2[LORE-LOADING] ^7Script inicializado!")
end) 