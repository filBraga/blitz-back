FROM node:16-alpine

WORKDIR /app/back

COPY package.json /app/back

RUN npm install

COPY . /app/back

EXPOSE 9000

CMD ["npm", "run", "dev"] 
