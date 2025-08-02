# 📋 Lista de Participantes - App em React Native

Este é um simples aplicativo desenvolvido em **React Native** que permite adicionar e remover participantes de um evento. O projeto tem como objetivo demonstrar o uso de **componentes funcionais**, **hooks** (como `useState`), e componentes básicos de UI como `FlatList`, `Alert`, `TextInput` e `TouchableOpacity`.

## ✅ Funcionalidades

- ➕ Adicionar participantes à lista
- ❌ Remover participantes com confirmação
- ⚠️ Prevenção de nomes duplicados
- 📭 Exibição de mensagem caso a lista esteja vazia

## 🧪 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) _(opcional, dependendo do setup)_
- `useState`
- Componentes nativos: `View`, `Text`, `FlatList`, `TextInput`, `TouchableOpacity`, `Alert`, etc.

## 📁 Estrutura do Projeto

## 🧠 Como funciona?

### ➕ Adicionar Participante

- O usuário digita um nome no campo de texto.
- Ao clicar no botão `+`, o nome é adicionado à lista se ainda não existir.
- Um alerta de sucesso é exibido.

### ❌ Remover Participante

- O participante é exibido com um botão de remover.
- Ao clicar, um `Alert` solicita confirmação.
- Se confirmado, o nome é removido da lista.

## 📸 Interface

- Campo `TextInput` para digitar o nome do participante
- Botão `+` para adicionar
- Lista `FlatList` com todos os nomes adicionados
- Texto exibido caso a lista esteja vazia

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git


2. Instale as dependências
npm install
# ou
yarn

3. Execute o projeto
npx expo start
```
