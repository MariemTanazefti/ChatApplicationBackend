const mysql = require('mysql2');
const db =require('../database')  

module.exports= class Job{
    static getAll(){
        return db.execute('select * from jobs');
    }

    static save(title,details,societyImage,societyName,salary,location,skills){
        console.log([title,details,societyImage,societyName,salary,location,skills])
        return db.execute('insert into jobs (title,details,societyImage,societyName,salary,location,skills) values (?,?,?,?,?,?,?)',[title,details,societyImage,societyName,salary,location,skills])

    }

    static findById(id){
        return db.execute('select * from jobs where id = ?',[id]);

    }
    static delete(id){
        return db.execute('delete from jobs where id = ?',[id]);
    }

}