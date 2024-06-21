# Use a base image with your preferred runtime environment (e.g., Node.js, Python, Java)
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json if using Node.js
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port if needed
EXPOSE 4000

# Command to run the application
CMD ["node", "app.js"]
