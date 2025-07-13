# Angel RP Loading Screen

Tela de loading moderna, responsiva e personalizável para servidores FiveM.

---

## Recursos
- Vídeo de fundo fullscreen (qualquer resolução)
- Logo centralizada e destacada
- Barra de progresso customizada
- Música de fundo com controle de volume minimalista
- Visual limpo, responsivo e fácil de personalizar
- Totalmente em português brasileiro

---

## Instalação

1. **Copie a pasta `ajn_loading` para:**
   ```
   resources/[custom]/ajn_loading
   ```

2. **Adicione ao seu `server.cfg`**
   ```
   ensure ajn_loading
   ```

3. **Personalize:**
   - **Logo:**
     - Substitua o arquivo `assets/media/angelrp.png` pela sua logo (preferencialmente PNG com fundo transparente).
     - Recomenda-se tamanho entre 200x200px e 400x400px.
   - **Vídeo de fundo:**
     - Substitua `assets/media/background.mp4` pelo seu vídeo.
     - Use formato `.mp4` (codec H.264), resolução até 1080p.
   - **Música:**
     - Substitua `assets/media/changes.mp3` pela música desejada.
     - Use formato `.mp3`.

4. **Configuração do volume:**
   - O volume pode ser ajustado pelo usuário na barra no canto inferior direito.

---

## Estrutura dos arquivos principais
```
ajn_loading/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── media/
│   │   ├── angelrp.png
│   │   ├── background.mp4
│   │   └── changes.mp3
├── index.html
├── fxmanifest.lua
├── client.lua
└── README.md
```

---

## Dicas de personalização
- **Cores e fontes:**
  - Edite `assets/css/style.css` para mudar cores, fontes e tamanhos.
- **Logo maior ou menor:**
  - Ajuste `.server-logo` no CSS.
- **Barra de progresso:**
  - Personalize a cor e animação em `.progress-bar` e `.progress-fill`.
- **Música:**
  - Troque o arquivo `.mp3` e ajuste o volume inicial em `main.js`.
- **Vídeo:**
  - Troque o arquivo `.mp4` e ajuste o overlay em `.video-overlay`.

---

## Suporte
- Se tiver problemas com áudio, vídeo ou personalização, confira se os arquivos estão nos caminhos corretos e com os nomes exatos.
- Para dúvidas ou sugestões, abra um issue no repositório ou entre em contato com o desenvolvedor do seu servidor.

---

## Créditos
- Baseado em projetos open-source da comunidade FiveM.
- Design e customização por Angel RP.

---

**Bom roleplay!** 