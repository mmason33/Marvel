module.exports = {

    getOffset: (offset) => {
        return `
        {
            characters(offset: ${offset}, limit: 1) {
                name,
                description,
                thumbnail,
                id,
                resourceURI,
                modified,
            }
        }`
    },

    getRandom: (offset) => {
        return `
            query_${offset}: characters(offset: ${offset}, limit: 1) {
                name,
                description,
                thumbnail,
                id,
                resourceURI,
                modified,
            }`
    }
}