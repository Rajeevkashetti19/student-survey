FROM node:latest as node
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
Run npm install
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /usr/local/app/dist/angular /usr/share/nginx/html
EXPOSE 4200