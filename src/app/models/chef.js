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
        `

        const values = [
            data.name,
            data.avatar_url,
            date(Date.now()).iso
            
        ]
        
        db.query(query, values, function(err , results){
            if(err) throw `Data base error ${err}`
            console.log(results)
        })
    }
}