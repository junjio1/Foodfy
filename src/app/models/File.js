
const db = require("../../config/db")
const {date} = require("../../lib/utils")

module.exports = {
    create({filename, path}){
        const query = `
        INSERT INTO files (
            name,
            path
        ) VALUES ($1, $2) 
        RETURNING id
        `

        const values = [
            filename,
            path,
        ]

        console.log(values)


       return db.query(query , values)
    },
}