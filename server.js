import { fastify } from 'fastify'

const server = fastify()

// GET, POST, PUT, DELETE


server.post("/index", () => {
    return 'Hello World'
})


server.get("/index", () => {
    return 'hello world'
})

server.put("/index/:id", () => {
    return ''
})

server.get("/node", () => {
    return ''
})

server.listen({
    port: 3000,
})
// 24:51