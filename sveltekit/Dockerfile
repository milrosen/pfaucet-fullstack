FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
ARG PUBLIC_DATABASE_IP=${PUBLIC_DATABASE_IP}
ENV PUBLIC_DATABASE_IP=${PUBLIC_DATABASE_IP}
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 8080
ENV PORT 8080
CMD [ "node", "build" ]