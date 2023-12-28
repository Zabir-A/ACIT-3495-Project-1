FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) into the root directory of the app
COPY package*.json ./

# Install dependencies in the app directory
RUN npm install

# Bundle the app source code inside the Docker image
COPY . .

# The command to run the application using node
CMD [ "npm", "start" ]
