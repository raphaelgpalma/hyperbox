import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()


server.post("/index", (request, reply) => {
    database.create({
        title: 'Index 01',
        description: 'this is a index'    
    })// first test

    console.log(database.list())

    return reply.status(201).send()
})


server.get("/index", () => {
    return 'hello rap'
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
// 24:51