# Step 1: Use an official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application files
COPY . .

# Step 5: Build the Angular application
RUN npm run build -- --prod

# Step 6: Verify the build output by listing files in the dist folder
RUN ls -al /app/dist

# Step 7: Use a smaller Nginx image to serve the built Angular app
FROM nginx:alpine

# Step 8: Copy the built Angular app to Nginx's public folder
COPY --from=build /app/dist/devops-angular /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 80

# Step 10: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
