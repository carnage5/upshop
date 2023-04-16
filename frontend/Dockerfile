FROM node:alpine as builder
WORKDIR /frontend
COPY ["package.json","./"]
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]