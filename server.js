import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('oi')


    return response.write()
})

server.listen(3000)

