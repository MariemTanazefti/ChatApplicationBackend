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

    static findById(idJob){
        return db.execute('select * from jobs where idJob = ?',[idJob]);

    }
    static delete(idJob){
        return db.execute('delete from jobs where idJob = ?',[idJob]);
    }
    /* static findid(id){
        //return db.execute("select jobs.title,jobs.details,jobs.societyImage,jobs.societyName,jobs.salary,jobs.location,jobs.skills from jobs join user.name, user.email,user.phoneNumber, user.adresse from user on jobs.id = user.id where id= ? ",[id])
        return db.execute("select jobs.id , user.id,user.name from jobs left outer join applyjob on job.id=applyjob.id_job left outer user on applyjob.id_user= user.id")

    } */

}