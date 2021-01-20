// scheme-model
const db = require("../data/db-config.js")

module.exports = {
    find() {

        return db('Product')
        .select()

        
        
    },

    findById(id) {
        return db('Product')
        .select().where('id', id)
    }
}
