# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory for the app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["node", "app.js"]
