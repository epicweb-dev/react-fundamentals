FROM node:24-bookworm-slim as base

RUN apt-get update && apt-get install -y git

ENV EPICSHOP_GITHUB_REPO=https://github.com/epicweb-dev/react-fundamentals
ENV EPICSHOP_CONTEXT_CWD="/myapp/workshop-content"
ENV EPICSHOP_HOME_DIR="/myapp/.epicshop"
ENV EPICSHOP_DEPLOYED="true"
ENV EPICSHOP_DISABLE_WATCHER="true"
ENV FLY="true"
ENV PORT="8080"
ENV NODE_ENV="production"

WORKDIR /myapp

# Clone the workshop repo during build time, excluding database files
RUN git clone --depth 1 ${EPICSHOP_GITHUB_REPO} ${EPICSHOP_CONTEXT_CWD}

ADD . .

RUN npm install --omit=dev

RUN cd ${EPICSHOP_CONTEXT_CWD} && \
    npx epicshop warm

CMD cd ${EPICSHOP_CONTEXT_CWD} && \
    npx epicshop start
