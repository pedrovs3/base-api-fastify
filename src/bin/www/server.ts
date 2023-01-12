import fastify from '../../Fastify';

const run = async () => {
  try {
    await fastify.listen({ port: 3333 });
  } catch (e) {
    process.exit(1);
  }
};

run();

// ZOD schema
// const userSchema = z.object({
//     name: z.string().min(3).max(50),
//     email: z.string().email(),
//     password: z.string().min(8).max(50)
// })
