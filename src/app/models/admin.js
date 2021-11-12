const db = require("../../config/db")
const {date} = require("../../lib/utils")

module.exports = {
    all(callback){

        db.query(`SELECT * FROM recipes`, function(err, results ){
            if(err) throw`Database err ${err}`
            callback(results.rows)
        })
        
    },
    create(data, callback){
        const query = `
        INSERT INTO recipes (
            image,
            title,
            author,
            ingredients,
            preparation,
            information,
            created_at
        ) VALUES ($1, $2 ,$3 ,$4 ,$5, $6, $7 )
        RETURNING id
        `

        const values = [
            data.image,
            data.title,
            data.author,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso
        ]

        

        db.query(query , values, function(err, results){
            if(err) throw`Database err ${err}`
            callback(results.rows[0])
        } )
    },
    find( id,callback){
        db.query(`SELECT * FROM recipes WHERE id = $1 `,[id] , function(err, results){
            if(err) throw`Database err ${err}`
            callback(results.rows[0])
            
            
        })
    },
    update(data ,callback){
        const query = `
        UPDATE recipes SET
            image = ($1),
            title = ($2),
            author = ($3),
            ingredients = ($4),
            preparation = ($5),
            information = ($6),
            created_at = ($7)
        WHERE id = $8
        `

        const values = [
            data.image,
            data.title,
            data.author,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso,
            data.id
        ]


        db.query(query , values ,function(err, results){
            if(err) throw`Database err ${err}`
            callback()

        } )
    }
}