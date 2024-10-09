// src/crudPlugin.js
async function crudPlugin(fastify, options) {
    const { model, routePrefix } = options;
  
    if (!model || !routePrefix) {
      throw new Error("O modelo Prisma e o prefixo da rota são obrigatórios.");
    }
  
    // Rota para listar todos os registros
    fastify.get(`${routePrefix}`, async (request, reply) => {
      try {
        const items = await model.findMany();
        return items;
      } catch (err) {
        reply.status(500).send(err);
      }
    });
  
    // Rota para obter um registro por ID
    fastify.get(`${routePrefix}/:id`, async (request, reply) => {
      try {
        const { id } = request.params;
        const item = await model.findUnique({ where: { id: Number(id) } });
        if (!item) {
          reply.status(404).send({ message: 'Registro não encontrado.' });
        }
        return item;
      } catch (err) {
        reply.status(500).send(err);
      }
    });
  
    // Rota para criar um novo registro
    fastify.post(`${routePrefix}`, async (request, reply) => {
      try {
        const data = request.body;
        const newItem = await model.create({ data });
        reply.status(201).send(newItem);
      } catch (err) {
        reply.status(500).send(err);
      }
    });
  
    // Rota para atualizar um registro por ID
    fastify.put(`${routePrefix}/:id`, async (request, reply) => {
      try {
        const { id } = request.params;
        const data = request.body;
        const updatedItem = await model.update({
          where: { id: Number(id) },
          data
        });
        return updatedItem;
      } catch (err) {
        reply.status(500).send(err);
      }
    });
  
    // Rota para deletar um registro por ID
    fastify.delete(`${routePrefix}/:id`, async (request, reply) => {
      try {
        const { id } = request.params;
        await model.delete({ where: { id: Number(id) } });
        reply.status(204).send();
      } catch (err) {
        reply.status(500).send(err);
      }
    });
  }
  
  module.exports = crudPlugin;
  