# 🛒 Shopping List App - Gerenciador de Compras da Semana

Simplifique suas compras da semana com o **Shopping List App**! Desenvolvido em React Native e Expo, este aplicativo oferece uma maneira intuitiva e eficiente de gerenciar todos os itens que você precisa comprar. Nunca mais esqueça um item no supermercado!

## 🎬 Demonstração

Confira uma demonstração do aplicativo em funcionamento:
**[Veja o app em ação no LinkedIn](https://www.linkedin.com/posts/rafconradoo_reactnative-javascript-mobile-activity-7190365127983218689-Jm31)**

## ✨ Recursos Principais

* **Adicionar Itens:** Insira facilmente novos itens à sua lista de compras com nome e quantidade.
* **Marcar como Concluído:** Alterne o status dos itens entre comprados (marcado) e pendentes.
* **Editar Itens:** Modifique o nome ou a quantidade de um item existente na lista.
* **Excluir Itens:** Remova itens específicos da lista individualmente.
* **Remover Todos os Itens:** Limpe toda a lista de compras com um único toque, ideal para começar uma nova semana.
* **Interface Intuitiva:** Design limpo e focado na usabilidade para uma ótima experiência do usuário.

## 🛠️ Tecnologias Utilizadas

* **[React Native (v0.74.1)](https://reactnative.dev/)**: Framework principal para desenvolvimento de aplicativos móveis multiplataforma.
* **[Expo (SDK ~51)](https://expo.dev/)**: Plataforma e conjunto de ferramentas para facilitar o desenvolvimento, build e deploy de aplicativos React Native.
* **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**: Linguagem de programação base.
* **[@expo/vector-icons (v14.0.0)](https://icons.expo.fyi/)**: Biblioteca de ícones vetoriais para enriquecer a interface visual.
* **[Expo Font (`expo-font`)](https://docs.expo.dev/versions/latest/sdk/font/)**: Para carregamento e uso de fontes personalizadas.
* **AsyncStorage**: Para persistência de dados localmente no dispositivo (inferido pela natureza do app, confirme se usou).
* **CSS-in-JS (StyleSheet API do React Native)**: Para estilização dos componentes.

## 🚀 Começando

Siga estas instruções para obter uma cópia local do projeto em funcionamento para desenvolvimento e teste.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada, ex: 18.x ou 20.x)
* NPM ou Yarn (gerenciador de pacotes)
* [Expo Go App](https://expo.dev/go) instalado no seu smartphone (para testar no dispositivo)
* (Opcional) Emulador Android / Simulador iOS configurado no seu computador.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/rafconrado/shopping_list.git](https://github.com/rafconrado/shopping_list.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd shopping_list
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    # yarn install
    ```

### Executando o Aplicativo

1.  **Inicie o servidor de desenvolvimento Expo:**
    ```bash
    npm start
    # ou
    # yarn start
    # ou
    # expo start
    ```
2.  Após o servidor iniciar, um QR Code será exibido no terminal.
3.  **Abra o aplicativo Expo Go no seu smartphone** e escaneie o QR Code.
    * Alternativamente, você pode pressionar:
        * `a` para abrir no emulador Android (se configurado).
        * `i` para abrir no simulador iOS (se configurado e em macOS).
        * `w` para abrir em um navegador web (pode ter limitações de funcionalidades nativas).

## 📜 Scripts Disponíveis

No `package.json`, você encontrará os seguintes scripts principais:

* `npm start` ou `expo start`: Inicia o servidor de desenvolvimento Expo.
* `npm run android` ou `expo start --android`: Inicia o servidor e tenta abrir no emulador/dispositivo Android.
* `npm run ios` ou `expo start --ios`: Inicia o servidor e tenta abrir no simulador/dispositivo iOS (macOS necessário).
* `npm run web` ou `expo start --web`: Inicia o servidor e tenta abrir em um navegador web.

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Se você tem ideias para melhorar o app ou encontrou algum bug, sinta-se à vontade para:

1.  Fazer um Fork do Projeto
2.  Criar sua Feature Branch (`git checkout -b feature/NovaFuncionalidade`)
3.  Commit suas mudanças (`git commit -m 'Adiciona NovaFuncionalidade'`)
4.  Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5.  Abrir um Pull Request

## 📧 Contato

Rafael Conrado
* GitHub: [@rafconrado](https://github.com/rafconrado)
* LinkedIn: [linkedin.com/in/rafconradoo](https://www.linkedin.com/in/rafconradoo/)
