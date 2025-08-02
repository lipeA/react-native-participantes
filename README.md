📋 Lista de Participantes - App em React Native
Este é um simples aplicativo desenvolvido em React Native que permite adicionar e remover participantes de um evento. O projeto tem como objetivo demonstrar o uso de componentes funcionais, hooks (como useState), e componentes básicos de UI como FlatList, Alert, TextInput e TouchableOpacity.

📱 Funcionalidades
Adicionar participantes à lista.

Evitar duplicatas (alerta caso o nome já exista).

Remover participantes com confirmação.

Interface simples e funcional, ideal para eventos, listas de presença, etc.

🧩 Tecnologias Utilizadas
React Native

Expo (opcional, dependendo do setup)

Hooks (useState)

Componentes básicos do React Native (View, Text, FlatList, Alert, etc.)

📂 Estrutura do Projeto
bash
Copy
Edit
/src
 ├── components
 │    └── Participant.tsx     # Componente que exibe nome e botão de remover
 └── screens
      └── Home.tsx            # Tela principal com lógica da lista de participantes
      └── styles.ts           # Estilos da tela Home
🧠 Como funciona?
1. Adicionar Participante
Usuário digita um nome no TextInput.

Ao clicar no botão +, o nome é adicionado à lista se não estiver duplicado.

É exibido um Alert confirmando a adição.

2. Remover Participante
O componente Participant exibe um botão de remoção.

Ao clicar, é mostrada uma confirmação via Alert.

Se confirmado, o nome é removido da lista.

📸 Interface
Campo de entrada para nome do participante.

Botão para adicionar.

Lista dinâmica com nomes e opção de remover.

Mensagem caso a lista esteja vazia.

🚀 Como rodar o projeto
Clone o repositório:

bash
Copy
Edit
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

bash
Copy
Edit
npm install
# ou
yarn
Execute com o Expo ou CLI:

bash
Copy
Edit
npm start
# ou
npx react-native run-android
# ou
npx react-native run-ios
📌 Observações
Certifique-se de que o componente Participant está corretamente criado e estilizado.

A estilização usada está importada de ./styles, certifique-se de que o arquivo styles.ts está disponível com os estilos correspondentes.

📄 Licença
Este projeto está sob a licença MIT.
