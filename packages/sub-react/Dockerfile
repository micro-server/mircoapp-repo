FROM node:14-alpine as builder
WORKDIR /code
ADD package.json /code
RUN npm install
ADD . /code
RUN npm run build

FROM nginx:alpine
COPY --from=builder code/build /usr/local/nginx/html/