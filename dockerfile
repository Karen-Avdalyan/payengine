FROM node:18.14 AS client
WORKDIR /payengine
COPY client/package.json client/package-lock.json .
RUN npm install
COPY client .
RUN npm run build

FROM node:18.14
WORKDIR /payengine
COPY server/package.json server/package-lock.json .
RUN npm install
COPY server .
COPY --from=client /payengine/build build
EXPOSE 5000
CMD ["node", "bin/www"]
