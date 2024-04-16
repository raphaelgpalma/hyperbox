import { createServer } from 'node:http'

const server = createServer(() => {
    console.log('raphael do chapeu')
})

server.listen(3000)

