FROM node

WORKDIR /usr/app/teamsoft

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3232

CMD ["npm", "run", "dev:docker"]
