# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json 
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 8080
EXPOSE 8080

CMD ["npm", "run", "server"]