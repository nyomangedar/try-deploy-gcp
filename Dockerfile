#NODE IMAGE
FROM node:16

#WORKDIR PATH
WORKDIR /usr/src/app

#DEPENDENCIES
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9000

CMD [ "node", "server.js" ]

