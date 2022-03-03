# tahap pengembangan
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# tahap produksi
# nginx state for serving content
FROM nginx:stable-alpine as production-stage
# Copy static assets from builder stage
COPY --from=build-stage /app/docs /usr/share/nginx/html
COPY ./etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]