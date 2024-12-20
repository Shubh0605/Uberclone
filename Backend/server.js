const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;

const captainRoutes = require('./routes/captain.routes');

// Make sure to use the /captain base path
app.use('/captain', captainRoutes);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
