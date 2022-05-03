FROM node:16-alpine
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose publc port and run npm command
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start"]