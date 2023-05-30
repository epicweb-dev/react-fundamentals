FROM node:16

WORKDIR /app
COPY . .
RUN NO_EMAIL_AUTOFILL=true node setup

CMD ["npm", "start"]
