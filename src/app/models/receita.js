const { query } = require("../../config/db")
const db = require("../../config/db")
const {date} = require("../../lib/utils")

module.exports = {
    all(callback){

        db.query(`SELECT recipes.*, chefs.name as chef_name
        FROM recipes 
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)`, function(err, results ){
            if(err) throw`Database err ${err}`
            callback(results.rows)
        })
        
    },
    create(data, callback){
        const query = `
        INSERT INTO recipes (
            image,
            title,
            chef_id,
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
            data.chef_id,
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
        db.query(`SELECT recipes.*, chefs.name as chef_name
        FROM recipes 
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        WHERE recipes.id=$1`,[id] , function(err, results){
            if(err) throw`Database err ${err}`
            callback(results.rows[0])
            
            
        })
    },
    update(data ,callback){
        const query = `
        UPDATE recipes SET
            image = ($1),
            title = ($2),
            chef_id = ($3),
            ingredients = ($4),
            preparation = ($5),
            information = ($6),
            created_at = ($7)
        WHERE id = $8
        `

        const values = [
            data.image,
            data.title,
            data.chef_id,
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
    },
    delete(id, callback){
        db.query(`DELETE FROM recipes  WHERE ID = $1`, [id] , function(err , results){
            if(err) throw`Database err ${err}`
            return callback()
        })
    },
    findChef(callback){

        db.query(`SELECT id, name  FROM chefs`, function(err, results){
            if(err) throw (`database err ${err}`)
            callback(results.rows)
        })
    },
    paginate(params){
        const { filter, limit , offset, callback} = params

        let query = "",
            filterQuery = "",
            totalQuery = `(
                SELECT count(*) FROM recipes
        ) AS total`

        if(filter){
        filterQuery = `
        WHERE recipes.title ILIKE '%${filter}%'
        `
        totalQuery = `(
            SELECT count(*) FROM recipes
            ${filterQuery}
        ) AS total`
    }

        query = `
        SELECT recipes.*,${totalQuery}, chefs.name as chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ${filterQuery}
        LIMIT $1 OFFSET $2 
        `

        db.query(query,[limit, offset], function(err , results){
            if(err) throw `Database err ${err}`
            callback(results.rows)
        })
    }
}