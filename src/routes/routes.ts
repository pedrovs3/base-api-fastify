import { FastifyInstance } from 'fastify';

// Declaration of an api route
export async function testRoutes(fastify: FastifyInstance) {
  fastify.get('/test/', async (request, reply) => {
    reply.send({ message: 'Hello!' });
  });
}
