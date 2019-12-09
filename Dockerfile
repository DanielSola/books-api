FROM mhart/alpine-node:10

ARG BUILD_ENV
ENV NODE_ENV ${BUILD_ENV}
ENV HOME /app

COPY package.json tmp/
WORKDIR /tmp
RUN npm install --no-production
RUN mkdir -p /app && cp -a /tmp/node_modules /app/
COPY package.json .babelrc ${HOME}/
COPY src/ ${HOME}/src

WORKDIR ${HOME}

COPY entrypoint.sh /
RUN chmod 755 /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
