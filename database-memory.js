import { randomUUID } from 'node:crypto'

export class DatabaseMemory{
    #indexes = new Map()

    list() {
        return Array.from(this.#indexes.entries()).map((indexArray) => {
            const id = indexArray[0]
            const data = indexArray[1]

            return {
                id,
                ...data,
            }
        })
    }

    create(index) {
        const indexId = randomUUID()
        this.#indexes.set(indexId,index)
    }

    update(id, index) {
        this.#indexes.set(id, index)
    }

    delete(id) {
        this.#indexes.delete(id)
    }
} 