FROM node:20-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install && npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]