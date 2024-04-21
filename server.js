import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

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
    return 'hello avestruz'
})

server.delete("/node/:id", () => {
    return 'hello avestruz'
})

server.listen({
    port: 3000,
})
