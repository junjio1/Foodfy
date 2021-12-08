const db = require("../../config/db")

module.exports = {
    all(callback){
        db.query(`SELECT recipes.* , chefs.name as chef_name 
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        `, function(err , results){
            if(err) throw`Database err ${err}`
            callback(results.rows)
        })
    },
    showRecipe(id, callback){
    
        db.query(`SELECT * FROM recipes WHERE ID = $1`, [id], function(err, results){
            if(err) throw`Database err ${err}`
            callback(results.rows[0])
        } )
    },
    showChef(callback){

        db.query(`SELECT chefs.name, chefs.avatar_url , count(recipes) as total_recipes
        FROM chefs
        LEFT JOIN recipes ON (chefs.id = recipes.chef_id) 
        GROUP BY chefs.id `, function(err, results){
            if(err) throw(`Database err ${err}`)
            callback(results.rows)
        })
    },
    findBy(filter , callback){
        db.query(`
            SELECT recipes.* , chefs.name as chef_name 
            FROM recipes
            LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
            WHERE recipes.title ILIKE '%${filter}%'
        `,function(err, results){
            if(err) throw`Database err ${err}`
            callback(results.rows)
        })
    },
    paginate(params){
        const { filter, limit , offset, callback} = params

        let query = `
        SELECT recipes.* , chefs.name as chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        `

        if(filter){
           query = `${query}
           WHERE recipes.title ILIKE '%${filter}%'
        `}
        
        query = `
        ${query}
        LIMIT $1 OFFSET $2 
        `

        db.query(query,[limit, offset], function(err , results){
            if(err) throw `Database err ${err}`
            callback(results.rows)
        })
    }
}