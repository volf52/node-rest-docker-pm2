# Base Image
FROM node:slim

# Create dir inside base image
WORKDIR /app

# Copy the files of root to app
ADD . /app

# Install dependencies
RUN npm install -g yarn
RUN yarn install
RUN yarn global add pm2
RUN yarn build

# Start pm2 and keep the docker container alive
CMD pm2 start process.yml && tail -f /dev/null

# Expose API port
EXPOSE 3000