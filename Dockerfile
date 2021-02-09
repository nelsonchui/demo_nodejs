FROM node:15.8.0
ENV NODE_ENV=production
ENV APP_HOME /demo_nodejs 
WORKDIR $APP_HOME
COPY ["./package.json", "./package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "helloworld.js" ]