FROM debian:bullseye-slim AS base
RUN --mount=type=cache,target=/var/cache/apt apt update && apt install curl -y \
  && curl -sL https://deb.nodesource.com/setup_16.x | bash -\
  && apt install nodejs -y && rm -rf /var/lib/apt/lists/*
WORKDIR /

FROM base AS builder
COPY ./src/stackjs-express ./src/stackjs-express
WORKDIR /src/stackjs-express
RUN npm i restore

FROM base as prod
COPY --from=builder ./src/stackjs-express ./src/stackjs-express
CMD ["node", "/src/stackjs-express/app.js"]