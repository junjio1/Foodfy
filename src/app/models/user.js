const db = require("../../config/db")

module.exports = {
    all(callback){
        db.query(`SELECT * FROM recipes`, function(err , results){
            if(err) throw`Database err ${err}`
            callback(results.rows)
        })
    },
    showRecipe(data, callback){
    
        db.query(`SELECT * FROM recipes WHERE ID = $1`, [id], function(err, results){
            if(err) throw`Database err ${err}`
            console.log(results)
        } )
    }
}