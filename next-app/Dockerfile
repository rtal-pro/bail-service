# Dockerfile for Next.js App

# Use an official Node.js image to build the Next.js app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lighter Node.js image to run the Next.js app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app .

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
