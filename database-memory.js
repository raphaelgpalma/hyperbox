import { randomUUID } from 'node:crypto'

export class DatabaseMemory{
    #indexes = new Map()

    list() {
        return this.#indexes.values()
    }

    create(index) {
        const indexId = randomUUID()
        this.#indexes.set(indexId,index)
    }

    update(id, index) {
        this.#indexes.set(id, index)
    }

    update(id) {
        this.#indexes.delete(id)
    }
} 