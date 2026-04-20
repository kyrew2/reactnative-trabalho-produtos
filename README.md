# 🛍️ FakeStore App - Trabalho React Native

Aplicativo mobile desenvolvido em **React Native com Expo** para a disciplina de Desenvolvimento Mobile. O objetivo principal é o consumo da **Fake Store API**, implementando autenticação, listagem de produtos com filtros, detalhes e navegação entre telas.

---

## 📌 Nota de Desenvolvimento
Para esta entrega, optou-se por utilizar diretamente os componentes nativos do React Native (como `TouchableOpacity` e `TextInput`). Componentes customizados pré-criados (como `VLButton`, `VLTextInput`) e diretórios de `resources` **não foram utilizados** no projeto final.

---

## 🚀 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor do Expo:**
   ```bash
   npx expo start -c
   ```
4. **Acesse o App:** Escaneie o QR Code exibido no terminal/navegador com a câmera do celular ou com o aplicativo **Expo Go**.

---

## 🔐 Autenticação e Usuários
Para realizar o login, é necessário utilizar credenciais de usuários reais da API.

**Como verificar usuários disponíveis:**
- O app possui o link **"Ver usuários disponíveis"** na tela de Login que consome o endpoint `GET https://fakestoreapi.com/users` e lista as opções na tela.
- Exemplos de credenciais válidas da API:
  - **Username:** `johnd` | **Password:** `m38rmF$`
  - **Username:** `mor_2314` | **Password:** `83r5^_`

---

## 📝 Funcionalidades Implementadas
- [x] Login consumindo os endpoints `/users` e `/auth/login`.
- [x] Tela Home (Listagem) consumindo o endpoint `/products`.
- [x] Filtro dinâmico por categorias e botão para limpar filtro.
- [x] Navegação de Pilha (Stack Navigation) com headers personalizados.
- [x] Header com botões de Logout e Informações.
- [x] Tela de Detalhes do Produto exibindo imagem, nome, descrição, categoria e preço.
- [x] Formatação de preços para BRL (R$).
- [x] Uso de `ActivityIndicator` em todos os carregamentos de API.
- [x] Tratamento de erros (ex: login inválido).
- [x] Interface organizada com estilização de sombras verdes em botões e cards.

---

## 👥 Integrantes do Grupo

- **Pedro Henrique Piccoli Franceschi** - RA: 1137855
- **Guilherme Matte Embarach** - RA: 1137953
