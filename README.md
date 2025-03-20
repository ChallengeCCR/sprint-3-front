# **Autorail Monitor - Challenge CCR**

## Sprint 3 - Front End Design Engineering

---

### Mais detalhes sobre o projeto disponíveis na entrega via Portal do Aluno

---

## 📺 **Demonstração do Projeto**

**Disponível em:**  
[Link do YouTube](<link do youtube>)

---

## 🚀 **Iniciando o Projeto**

1. **Abra um terminal** e navegue até a pasta do projeto.
2. **Instale as dependências** do projeto com o comando:

    ```bash
    npm install
    ```

3. Após a instalação, inicie o servidor com um dos comandos abaixo:

    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
    ```

4. **Abra [http://localhost:3000](http://localhost:3000)** em seu navegador para ver o resultado.

> **Observação:** Este projeto utiliza o [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para estilizar fontes e [Geist](https://vercel.com/font). Caso ocorra um erro relacionado às fontes, certifique-se de que as dependências foram instaladas corretamente.

---

## 🗂️ **Estrutura do Projeto**

```bash
src/
├── app/
│   ├── page.tsx                   # Página inicial
│   ├── alertas/                   # Alertas ativos
│   ├── area-colaborador/          # Área do colaborador
│   ├── cadastro/                  # Registro de usuários
│   ├── integrantes/               # Equipe do projeto
│   ├── login/                     # Login de usuários
│   ├── minha-conta/               # Dados do usuário logado
│   ├── sobre/                     # Informações sobre o projeto
│   ├── status/                    # Status das linhas, estações e trens
│   ├── suporte/                   # Suporte e ajuda
├── components/                    # Componentes reutilizáveis
│   ├── BarraDePesquisa/           # Componente de barra de pesquisa
│   ├── BotaoPrimario/             # Botão principal estilizado
│   ├── InputCustomizada/          # Campo de input customizado
│   ├── LayoutComp/                # Layout geral do site
│   ├── SelectCustomizado/         # Dropdown personalizado
│   ├── SubBotaoPagina/            # Botão secundário
│   ├── TituloPagina/              # Componente de título da página

## Desenvolvimento

O sistema foi desenvolvido pensando em passageiros e operadores do CCO com o intuito de facilitar a visualização das condições dos serviçõs que estão sendo fornecidos pela CCR nas linhas 8 e 9.

As páginas buscam ter uma interface simples e atrativas que sejam objetivas, tendo funções específicas modularizadas.


## Navegar no sistema

Para navegar pelo sistema basta utilizar dos links contidos no cabeçalho do site.

Na versão desktop esses links sempre estão visíveis, para dispositivos menores ele aparece como uma sidebar que pode ser acessada ao clicar em um botão de "lista".


```
