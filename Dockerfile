FROM node:12.18.1

ENV NODE_ENV=production



RUN npm install --production



COPY . .



CMD [ "node", "app.js" ]
