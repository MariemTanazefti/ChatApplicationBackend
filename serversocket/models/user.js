const mysql = require('mysql2');
const db =require('../database')  

module.exports=class User{
static getAll(){
    return db.execute('select * from user');
}

static save(name,phonenNumber,adresse,email,password,profile){
    return db.execute('insert into user (name,phoneNumber,adresse,email,password,profile) values (?,?,?,?,?,?)',[name,phonenNumber,adresse,email,password,profile]);
    
}

static update(idUser,name,phoneNumber,adresse,email,password,cv){
    console.log([name,phoneNumber,adresse,email,password,cv,idUser])
    return db.execute('update user SET name = ?, phoneNumber = ?, adresse = ?, email = ?, password = ?, cv = ? where idUser = ?',
    [name,phoneNumber,adresse,email,password,cv,idUser])

}


static findOne(email,password){
    return db.execute('select * from user where email = ? and password = ?',[email,password]);

}

static findById(idUser){
    return db.execute('select * from user where idUser = ?',[idUser]);

}





};
