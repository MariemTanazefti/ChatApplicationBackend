const mysql = require('mysql2');
const db =require('../database') 

module.exports= class Apply{


    static save(idJob,idUser,name,email,adresse,cv,motivation){
        //return db.execute("select jobs.title,jobs.details,jobs.societyImage,jobs.societyName,jobs.salary,jobs.location,jobs.skills from jobs join user.name, user.email,user.phoneNumber, user.adresse from user on jobs.id = user.id where id= ? ",[id])
        //return db.execute("select jobs.id , user.id,user.name from jobs left outer join applyjob on job.id=applyjob.id_job left outer user on applyjob.id_user= user.id")
        return db.execute("insert into applyjob(idJob, idUser, name,email,adresse,cv,motivation) values (?,?,?,?,?,?,?) ",[idJob,idUser,name,email,adresse,cv,motivation])

    }

    static getAll(){
        return db.execute("select * from applyjob")

    }



} 