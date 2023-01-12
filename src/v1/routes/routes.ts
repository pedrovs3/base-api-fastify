import { FastifyInstance } from 'fastify';

// Declaration of an api route
export async function testRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    reply.send({ message: 'Hello!' });
  });
}

/*
Responses:
  Success:
    {
      "data": {
        "id": 1001,
        "name": "Wing"
      }
    }

  Error:
    {
      "error": {
        "code": 404,
        "message": "ID not found"
      }
    }
*/
