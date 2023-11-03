# Use uma imagem oficial do Node.js como base
FROM node:14

# Crie um diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto do código para o diretório de trabalho
COPY . .

# Exponha a porta 3000 (ou a porta que seu aplicativo usa)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
