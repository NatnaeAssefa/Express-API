// Import required modules
const Hapi = require('@hapi/hapi');
const package = require('./package.json');


// Create a server instance
const server = Hapi.server({
    port: 2127,
    host: '127.0.0.1'
});

// Define a sample route
server.route({
    method: 'GET',
    path: '/api/example',
    handler: (request, h) => {
        return { message: `This is an example API endpoint made by ${package.author}` };
    }
});

// Start the server
const start = async () => {
    try {
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    } catch (err) {
        console.error('Error starting server:', err);
    }
};

start();
