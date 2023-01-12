import awsLambdaFastify from '@fastify/aws-lambda';
import server from './server';

export const proxy = awsLambdaFastify(server);
