FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN yarn install
RUN yarn build
ENTRYPOINT yarn start
EXPOSE 8080