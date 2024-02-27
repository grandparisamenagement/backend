"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var fastify = (0, fastify_1.default)({
    logger: true
});
// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'worldd' });
});
// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    // Server is now listening on ${address}
});
