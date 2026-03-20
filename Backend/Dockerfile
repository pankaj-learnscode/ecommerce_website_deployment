FROM node:18

WORKDIR /app

# dependencies
COPY package*.json ./
RUN npm install

# app code
COPY . .

# expose port
EXPOSE 5000

# run app
CMD ["npm", "start", "dev"]