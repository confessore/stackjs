# base image
FROM debian:bullseye-slim AS base
RUN --mount=type=cache,target=/var/cache/apt apt update && apt install curl -y \
  && curl -sL https://deb.nodesource.com/setup_16.x | bash -\
  && apt install nodejs -y && rm -rf /var/lib/apt/lists/*
WORKDIR /

# builder for react
FROM base AS react-builder
COPY ./src/stackjs-react ./src/stackjs-react
WORKDIR /src/stackjs-react
RUN npm i
RUN npm run build --prod


# builder for express
FROM base AS express-builder
COPY ./src/stackjs-express ./src/stackjs-express
WORKDIR /src/stackjs-express
RUN npm i restore


# production for express
FROM base as express-prod
COPY --from=express-builder ./src/stackjs-express ./src/stackjs-express
COPY --from=react-builder ./src/stackjs-react/build ./src/stackjs-react/build
CMD ["node", "/src/stackjs-express/app.js"]