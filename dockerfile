# Step 1: Use an official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Install Angular CLI globally
RUN npm install -g @angular/cli
RUN npm list -g @angular/cli

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Angular application for production
RUN ng build --configuration=production

# Step 7: Verify the build output by listing files in the dist/devops-angular folder
RUN ls -al /app/dist/devops-angular

# Step 8: Use a smaller Nginx image to serve the built Angular app
FROM nginx:alpine

# Step 9: Copy the built Angular app to Nginx's public folder
COPY --from=build /app/dist/devops-angular/ /usr/share/nginx/html/

# Step 10: Expose port 80
EXPOSE 80

# Step 11: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
