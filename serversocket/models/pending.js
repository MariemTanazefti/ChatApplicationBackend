const mysql = require('mysql2');
const db =require('../database')  

module.exports= class Pending{


    static accept(title,details,societyImage,societyName,salary,location,skills){
        console.log([title,details,societyImage,societyName,salary,location,skills])
        return db.execute('insert into jobs (title,details,societyImage,societyName,salary,location,skills) values (?,?,?,?,?,?,?)',[title,details,societyImage,societyName,salary,location,skills])

    }

    static delete(idPending){
        return db.execute('delete from pending where idPending = ?',[idPending]);
    }

}