# OCTO AI - Site Oficial

## 🧠 A inteligência que respira

Site oficial da OCTO AI, uma landing page moderna e futurista que apresenta nossa filosofia de sistemas inteligentes com alma.

## ✨ Características

- **Design Futurista**: Paleta roxa com gradientes, glassmorphism e efeitos visuais avançados
- **Tipografia Premium**: Space Grotesk para uma aparência moderna e legível
- **Interações Dinâmicas**: JavaScript vanilla para efeitos parallax, partículas e animações
- **Responsivo**: Totalmente otimizado para desktop, tablet e mobile
- **Performance**: Carregamento otimizado com animações suaves

## 🛠️ Tecnologias

- **HTML5**: Semântico e acessível
- **CSS3**: Variáveis CSS, Grid, Flexbox, animações avançadas
- **JavaScript Vanilla**: Sem dependências externas para interações
- **Bootstrap 5.3.2**: Para layout responsivo e componentes
- **Google Fonts**: Space Grotesk para tipografia

## 📁 Estrutura do Projeto

```
siteOCTO/
├── index.html          # Página principal
├── 404.html           # Página de erro 404
├── termos.html         # Página de termos de uso
├── privacidade.html    # Página de política de privacidade
├── css/
│   └── styles.css      # Estilos principais
├── js/
│   └── main.js         # Funcionalidades JavaScript
├── assets/
│   ├── video/
│   │   └── bg-octo.mp4 # Vídeo background do hero
│   ├── faviconOcto.png # Favicon principal (PNG)
│   ├── favicon.svg     # Ícone SVG moderno (backup)
│   └── favicon.ico     # Ícone para compatibilidade
├── fonts/              # Fonts personalizadas (futuro)
└── README.md          # Documentação
```

## 🎬 Recursos de Vídeo

### Funcionalidades Implementadas
- **Vídeo Background**: `bg-octo.mp4` como fundo do hero
- **Velocidade Personalizada**: 28% mais lento (playbackRate: 0.72)
- **Single Play**: Reproduz uma vez sem loop
- **Autoplay Silenciado**: Inicia automaticamente (requisito dos browsers)
- **Tratamento de Erros**: Fallback se o vídeo falhar ao carregar
- **Otimização Mobile**: Performance ajustada para dispositivos móveis

## 🕐 Funcionalidades Dinâmicas

### Copyright Automático
- **Timezone São Paulo**: Detecta automaticamente o ano atual baseado no horário de São Paulo, Brasil
- **Atualização Dinâmica**: O ano é atualizado em tempo real quando a página carrega
- **Fallback Seguro**: Se houver erro na detecção do timezone, usa o ano local
- **Monitoramento**: Verifica e atualiza periodicamente para garantir precisão

## 🚨 Página de Erro 404

### Funcionalidades
- **Design Futurista**: Tela de erro 404 com estilo premium consistente
- **Animações Avançadas**: Número 404 com gradiente animado e efeito glow
- **Navegação Intuitiva**: Botões para voltar ao início e contato
- **Responsiva**: Funciona perfeitamente em todos os dispositivos
- **SEO Otimizada**: Título e meta tags apropriados para mecanismos de busca

### Elementos Visuais
- **Número 404 Animado**: Gradiente roxo/azul com efeito de brilho pulsante
- **Fundo Radial**: Gradiente sutil para profundidade visual
- **Botões de Ação**: CTAs claros para navegação
- **Contato Integrado**: Email de suporte diretamente na página

### Estrutura da Página
```html
<section class="error-404-section">
    <h1 class="error-title">
        <span class="error-number">404</span>
    </h1>
    <h2 class="error-subtitle">Página não encontrada</h2>
    <p class="error-description">A página que você está procurando não existe ou foi movida.</p>
    <div class="error-actions">
        <!-- Botões de ação -->
    </div>
</section>
```

## 📄 Página de Termos de Uso

### Funcionalidades
- **Página Completa**: `termos.html` com layout responsivo e navegação
- **Datas Dinâmicas**: Data de vigência e última atualização inseridas automaticamente
- **Timezone São Paulo**: Todas as datas baseadas no horário de São Paulo, Brasil
- **Navegação Integrada**: Links no rodapé de todas as páginas
- **Design Consistente**: Mantém a identidade visual da marca OCTO AI

### Seções Incluídas
1. **Aceitação dos Termos**
2. **Licença Limitada**
3. **Uso Permitido**
4. **Propriedade Intelectual**
5. **Assinaturas e Pagamentos**
6. **Privacidade**
7. **Modificações**
8. **Encerramento de Acesso**
9. **Isenção de Garantias**
10. **Limitação de Responsabilidade**
11. **Legislação Aplicável**
12. **Contato**

## 🔒 Página de Política de Privacidade

### Funcionalidades
- **Página Completa**: `privacidade.html` com layout responsivo e navegação
- **Datas Dinâmicas**: Data de vigência e última atualização inseridas automaticamente
- **Timezone São Paulo**: Todas as datas baseadas no horário de São Paulo, Brasil
- **Navegação Integrada**: Links no rodapé de todas as páginas
- **Design Consistente**: Mantém a identidade visual da marca OCTO AI

### Seções Incluídas
1. **Informações que Coletamos**
2. **Como Usamos Suas Informações**
3. **Compartilhamento de Dados**
4. **Armazenamento e Segurança**
5. **Seus Direitos**
6. **Dados de Crianças**
7. **Cookies e Tecnologias Semelhantes**
8. **Retenção de Dados**
9. **Alterações nesta Política**
10. **Contato**

## 🎨 Paleta de Cores

- **Primário**: `#1a0033` (Roxo profundo)
- **Secundário**: `#2d1b69` (Roxo médio)
- **Neon**: `#8b5cf6` (Roxo neon)
- **Elétrico**: `#00d4ff` (Azul elétrico)
- **Violeta**: `#7c3aed` (Violeta)

## 🚀 Como Executar

1. **Servidor Local**:
   ```bash
   # Usando Python
   python -m http.server 8000

   # Usando Node.js
   npx serve .

   # Usando PHP
   php -S localhost:8000
   ```

2. **Acesse**: `http://localhost:8000`

## 📱 Seções do Site

### 🟣 Hero Section
- Título impactante com slogan principal
- CTA para ação imediata
- Efeitos de partículas dinâmicas
- Vídeo background cinematográfico (28% mais lento, sem loop)

### 🧠 Sobre Nós
- Filosofia da marca OCTO AI
- Texto explicativo sobre nossa origem
- Design com tipografia elegante

### 🧩 O que Fazemos
- Grid de serviços com cards interativos
- Ícones representativos para cada serviço
- Hover effects e animações

### 📬 Contato
- Informações de contato diretas
- Formulário de conexão
- Ambiente acolhedor para conversação

## ⚡ Funcionalidades JavaScript

- **Scroll Suave**: Navegação fluida entre seções
- **Animações ao Scroll**: Elementos aparecem com fade-in
- **Efeitos de Partículas**: Partículas dinâmicas no hero
- **Interações com Cards**: Hover effects nos serviços
- **Navbar Dinâmica**: Esconde/mostra conforme scroll
- **Parallax Mouse**: Movimento baseado no mouse
- **Vídeo Background**: Controle avançado de reprodução com velocidade personalizada
- **Copyright Dinâmico**: Ano atualizado automaticamente baseado no timezone de São Paulo
- **Favicon Personalizado**: `faviconOcto.png` como ícone principal do site
- **Fonte Gordita Black**: Aplicada automaticamente apenas à palavra "OCTO" (arquivo .otf local)

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `css/styles.css`:
```css
:root {
    --neon-purple: #8b5cf6;
    --primary-purple: #1a0033;
    /* ... outras cores */
}
```

### Conteúdo
- Atualize textos diretamente no `index.html`
- Mantenha a estrutura semântica
- Preserve classes CSS para funcionalidade

## 📊 Performance

- **Otimizado**: CSS e JS minificados para produção
- **Lazy Loading**: Imagens carregam conforme necessário
- **Feature Flags**: Sistema para habilitar/desabilitar funcionalidades
- **Error Handling**: Tratamento de erros estruturado

## 🌐 Deploy

O site está hospedado em:
- **GitHub Pages**: https://OctoAISoftware.github.io/octoai-landing/
- **Repositório GitHub**: https://github.com/OctoAISoftware/octoai-landing

O site também está pronto para deploy em:
- Vercel
- Netlify
- Qualquer servidor web estático

### Arquivos para Deploy
- `index.html` - Página principal
- `404.html` - Página de erro 404
- `termos.html` - Termos de uso
- `privacidade.html` - Política de privacidade
- `css/styles.css` - Estilos
- `js/main.js` - JavaScript
- `assets/faviconOcto.png` - Favicon principal
- `assets/favicon.svg` - Favicon SVG (backup)
- `assets/favicon.ico` - Favicon para compatibilidade
- `assets/video/bg-octo.mp4` - Vídeo background
- `fonts/gordita-black.otf` - Fonte Gordita Black personalizada

### Dependências Externas
- **GSAP 3.12.5**: Biblioteca de animações (cdn.jsdelivr.net)
- **GSAP ScrollTrigger**: Plugin para animações baseadas em scroll (cdn.jsdelivr.net)
- **Bootstrap 5.3.2**: Framework CSS (cdn.jsdelivr.net)
- **Google Fonts**: Space Grotesk e Gorditas (fonts.googleapis.com)

## 🎨 Fonte Gordita Black Personalizada

### Funcionalidades
- **Aplicação Automática**: Fonte aplicada automaticamente a todos os elementos que contenham "OCTO"
- **Detecção Inteligente**: Verifica texto, atributos alt, title, placeholder, aria-label
- **Observer de Mutação**: Monitora mudanças no DOM para aplicar em conteúdo dinâmico
- **Fallback Seguro**: Usa Space Grotesk como fallback se Gordita não carregar

### Como Funciona
```javascript
// Detecta elementos que contenham "OCTO" e aplica a fonte
element.classList.add('font-octo'); // font-family: 'Gordita Black', 'Space Grotesk', sans-serif;
```

### Funcionalidades
- **Aplicação Ultra-Seletiva**: Envolve APENAS a palavra "OCTO" em elementos de texto visíveis
- **Modificação de HTML**: Altera o innerHTML para inserir spans seletivamente
- **Regex Inteligente**: Usa `\bOCTO\b` para detectar apenas a palavra isolada
- **Verificação de Visibilidade**: Só processa elementos visíveis na tela
- **Exclusão de Mídia**: Ignora elementos de vídeo, imagem e containers vazios
- **Evita Reprocessamento**: Verifica se já foi processado para evitar duplicatas
- **Fallback Seguro**: Usa Space Grotesk se Gordita Black não carregar
- **Arquivo Local**: Fonte .otf carregada diretamente do servidor

### Como Funciona
```javascript
// Filtra elementos e verifica texto visível
function applyOctoFont() {
    // Exclui elementos de mídia e containers vazios
    if (element.tagName === 'VIDEO' || element.tagName === 'IMG') return;

    // Verifica se contém "OCTO" como texto visível
    const visibleText = element.textContent || '';
    const hasOctoInText = /\bOCTO\b/i.test(visibleText);

    if (hasOctoInText && !alreadyProcessed) {
        element.innerHTML = originalContent.replace(/\bOCTO\b/gi, '<span class="font-octo">$&</span>');
    }
}
```

### Elementos Afetados
- ✅ `<strong>OCTO AI</strong>` → `<strong><span class="font-octo">OCTO</span> AI</strong>`
- ✅ `"OCTO AI"` em títulos e textos
- ✅ Botões e links com "OCTO" como texto
- ❌ Elementos de vídeo com "octo.mp4" em src
- ❌ Imagens com "OCTO" em alt
- ❌ Containers vazios (divs sem texto)
- ❌ "OCTOPUS", "OctoSoft" (não são exatamente "OCTO")

## 📞 Contato

**OCTO AI**
- 💌 contato@octoaisoftware.com
> **Nota**: O domínio do email foi atualizado de `octoai.com.br` para `octoaisoftware.com` em todas as páginas do site.

---

*Desenvolvido com 💜 pela OCTO AI - Sistemas inteligentes com alma*
