# Barbearia FullStack

![Next.js](https://img.shields.io/badge/Next.js-12.0.7-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.2.19-blueviolet)
![NextAuth](https://img.shields.io/badge/NextAuth-4.0.0-orange)
![Prisma](https://img.shields.io/badge/Prisma-3.0.2-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.4-blue)
![Docker](https://img.shields.io/badge/Docker-20.10.7-blue)

Aplicação full-stack desenvolvida para uma barbearia, construída durante a Full Stack Week, com foco em gerenciamento de serviços e agendamento de horários.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e rotas dinâmicas.
- **TailwindCSS**: Estilização utilizando uma abordagem de utilitários.
- **NextAuth**: Implementação de autenticação com Google.
- **Prisma**: ORM para interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado na aplicação.
- **Docker**: Utilizado para contêineres e ambientes de desenvolvimento consistentes.

## 📋 Funcionalidades

- Autenticação via Google OAuth 2.0 usando **NextAuth**.
- Gerenciamento de serviços e variações de serviços (ex: corte, barba, pacotes combinados).
- Agendamento de horários com ajuste de data e hora na tela inicial.
- Painel administrativo para controle de serviços e horários.
- Responsividade e design otimizado utilizando **TailwindCSS**.

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- **Docker** instalado
- **Node.js** v20+ instalado

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/barbearia.git

2. cd barbearia
   ```bash
    npm install
3. Configure o arquivo .env com as seguintes variáveis:
   ```bash
    DATABASE_URL="postgresql://user:password@localhost:5432/barbearia"
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET="sua-chave-secreta"
    GOOGLE_CLIENT_ID="seu-google-client-id"
    GOOGLE_CLIENT_SECRET="seu-google-client-secret"
4. Inicie a base de dados da aplicação com Docker:
   ```bash
    docker-compose up -d

5. Execute o Prisma para preparar o banco de dados:
   ```bash
    npx prisma migrate dev

6. Inicie a aplicação:
    ```bash
    npm run dev
    






