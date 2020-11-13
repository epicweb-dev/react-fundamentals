FROM node:14

WORKDIR /app
COPY . .
RUN NO_EMAIL_AUTOFILL=true node setup

CMD ["npm", "start"]
