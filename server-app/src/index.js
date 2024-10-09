// src/index.js
const fastify = require('fastify')({ logger: true });
const prisma = require('./prismaClient');
const crudPlugin = require('./crudPlugin');
const cors = require('@fastify/cors');

fastify.register(cors, { origin: true });
// Registrar o plugin CRUD para o modelo `User`
fastify.register(crudPlugin, {
  model: prisma.user,           // Modelo Prisma para `User`
  routePrefix: '/users'         // Prefixo de rota para `User`
});

// Registrar o plugin CRUD para o modelo `Post`
fastify.register(crudPlugin, {
  model: prisma.post,           // Modelo Prisma para `Post`
  routePrefix: '/posts'         // Prefixo de rota para `Post`
});

// Inicializar o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server listening at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
