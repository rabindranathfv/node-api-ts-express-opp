FROM node:16-alpine

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package.*.json .

COPY . .

RUN npm install

ENV NODE_ENV=production

# RUN npm run mig:gen -- src/migrations/InitDB

# RUN npm run mig:run

EXPOSE 4000

CMD [ "npm", "run", "start-prod" ]