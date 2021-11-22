const db = require("../../config/db")
const {date} = require("../../lib/utils")

module.exports={
    Show(callback){
        db.query(`SELECT * FROM chefs`, function(err, results){
            if(err) throw `Data base error ${err}`
            callback(results.rows)
        })
    },
    Create(data,callback){
        const query = `
            INSERT INTO chefs(
                name, 
                avatar_url,
                created_at
            )VALUES ($1, $2, $3)
            RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url,
            date(Date.now()).iso
            
        ]
        
        db.query(query, values, function(err , results){
            if(err) throw `Data base error ${err}`
            callback(results.rows[0])
        })
    },
    Find(id ,callback){
        db.query(`SELECT * FROM chefs WHERE id=$1`, [id], function(err, results){
            if(err) throw `Database err ${err}`
            callback(results.rows[0])
        })
    }
}