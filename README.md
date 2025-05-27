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
