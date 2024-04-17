FROM node:18-bookworm-slim as base

RUN apt-get update && apt-get install -y git

ENV epicshop_CONTEXT_CWD="/myapp/workshop-content"
ENV epicshop_DEPLOYED="true"
ENV epicshop_DISABLE_WATCHER="true"
ENV FLY="true"
ENV PORT="8080"
ENV NODE_ENV="production"

WORKDIR /myapp

ADD . .

RUN npm install --omit=dev

CMD node ./setup-swap.js && \
    rm -rf ${epicshop_CONTEXT_CWD} && \
    git clone https://github.com/epicweb-dev/react-fundamentals ${epicshop_CONTEXT_CWD} && \
    cd ${epicshop_CONTEXT_CWD} && \
    npx epicshop start
