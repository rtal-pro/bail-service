FROM node:16

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package.json ./
COPY package-lock.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Create the dist directory and set permissions
RUN mkdir -p /app/dist && chown -R node:node /app && chown -R node:node /app/node_modules

# Use a non-root user to run the app
USER node

# Run the web service on container startup.
CMD ["npm", "run", "start:dev", "apt-get", "install", "zsh", "zsh-autosuggestions", "zsh-syntax-highlighting", "zsh-theme-powerlevel10k"]
