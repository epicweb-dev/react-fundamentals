FROM node:20-bookworm-slim as base

RUN apt-get update && apt-get install -y git

ENV EPICSHOP_CONTEXT_CWD="/myapp/workshop-content"
ENV EPICSHOP_DEPLOYED="true"
ENV EPICSHOP_DISABLE_WATCHER="true"
ENV FLY="true"
ENV PORT="8080"
ENV NODE_ENV="production"

WORKDIR /myapp

ADD . .

RUN npm install --omit=dev

CMD rm -rf ${EPICSHOP_CONTEXT_CWD} && \
    git clone https://github.com/epicweb-dev/react-fundamentals ${EPICSHOP_CONTEXT_CWD} && \
    cd ${EPICSHOP_CONTEXT_CWD} && \
    npx epicshop start
