FROM node:alpine as build

WORKDIR /usr/src/app
COPY . .
COPY production.env .env.local
RUN npm install --silent
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build .
COPY nginx.conf /etc/nginx/conf.d/application.conf

EXPOSE 8080
