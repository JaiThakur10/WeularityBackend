# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the project (this should generate the dist directory)
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

# Set environment variables
ENV RECIPIENTNAME=""
ENV RECIPIENTEMAIL=""
ENV SENDERNAME=""
ENV SENDEREMAIL=""
ENV MAILAPI=""

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]

