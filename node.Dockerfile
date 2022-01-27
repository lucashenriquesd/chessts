FROM node:16.13-alpine3.15
# needed for bcrypt since it uses node-gyp
RUN apk add python3 make g++
RUN npm install -g nodemon