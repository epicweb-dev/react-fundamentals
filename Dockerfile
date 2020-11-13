FROM node:14

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN node setup

CMD ["npm", "start"]
