# Project >>>Work In Progress<<<

# E-Testing App
## 🧰 Tech Stack

- **Frontend:** React, Semantic UI  
- **Backend:** Node.js, Express.js (microservices-based)  
- **Database:** MySQL, Sequelize ORM  
- **Admin Panel:** AdminJS with custom resource configurations  
- **Authentication:** JWT-based login system
- **Features:** Progressive Web App (PWA), Responsive Design for mobile and desktop

# pm2
## Start server
pm2 start authServer.js --name="auth" <br></br>
pm2 start server.js --name="backend"

## Server status
pm2 list

## Stop all server
pm2 stop all

## Restart server example
pm2 restart all