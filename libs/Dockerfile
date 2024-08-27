# libs/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/libs

COPY package*.json ./
RUN npm install

COPY . .

# Se o módulo precisa de um servidor para servir os utilitários
CMD ["npm", "start"]