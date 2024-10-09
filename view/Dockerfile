# Defina a imagem base
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código da aplicação
COPY . .

# Build do projeto Next.js
RUN npm run build

# Defina a porta exposta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
