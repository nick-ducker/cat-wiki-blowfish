FROM node:16-alpine As development

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./client/package.json .
RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY ./client .

RUN npm run build 

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./package.json ./

COPY --from=development /usr/src/app/build /usr/src/app/client/build

RUN npm install

CMD ["node", "server.js"]