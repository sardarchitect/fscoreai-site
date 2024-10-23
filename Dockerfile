# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
# RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000


# # Start the Redis service
# RUN apt-get update && apt-get install -y redis-server

# # Define the command to run the app
# CMD service redis-server start && npm start

# Define the command to run the app
CMD ["npm", "run", "dev"]
# # CMD ["npm", "start"]
