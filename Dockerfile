FROM node:14.8-alpine

ENV  NEXT_TELEMETRY_DISABLED=1

RUN mkdir /app

WORKDIR /app

ADD package.json yarn.lock ./

RUN yarn

ADD . /app

RUN yarn build

CMD yarn start