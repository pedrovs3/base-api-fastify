"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRoutes = void 0;
async function testRoutes(fastify) {
    fastify.get('/test/', async (request, reply) => {
        reply.send({ message: 'Hello!' });
    });
}
exports.testRoutes = testRoutes;
