import { fastify } from 'fastify'
import fastifyStatic from 'fastify-static';
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()

server.register(fastifyStatic, {
    root: path.join(__dirname, 'build'),
    prefix: '/static',
  });

server.get('/', (request, reply) => {
    reply.sendFile('index.html');
  });

server.post("/index", (request, reply) => {
    const { title, description } = request.body


    database.create({
        title,
        description   
    })

    return reply.status(201).send()
})


server.get("/index", () => {
    const indexes = database.list()

    console.log(indexes)

    return indexes
})

server.put("/index/:id", () => {
    const indexId = request.params.id 
    const { title, description, duration } = request.body


    database.update(indexId, {
        title,
        description,
    })

    return reply.status(204).send()
})

server.delete("/index/:id", (request, reply) => {
    const indexId = request.params.id

    database.delete(indexId)

    return reply.status(204).send()
})

server.listen({
    port: 3000,
})
