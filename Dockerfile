FROM node:16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY . .

RUN npm install -g npm-check-updates
RUN npm run build


EXPOSE 3000

CMD [ "npm", "start"]