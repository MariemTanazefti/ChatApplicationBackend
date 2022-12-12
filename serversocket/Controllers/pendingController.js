var  Pending  = require("../models/pending");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const acceptPending = async(req,res) =>{
    const idPending= req.params.idPending;
    if(idPending.getAction().equals("add")){
        title = req.body.title;
        details= req.body.details;
        societyImage= req.body.societyImage;
        societyName= req.body.societyName;
        salary= req.body.salary;
        location= req.body.location;
        skills= req.body.skills;
        const newjobPending= await Pending.save(title,details,societyImage,societyName,salary,location,skills);
        res.status(201).json({newjobPending}); 
        idPending.setStatus("accepted")
    }

}
const deletePending = async(req,res) =>{
    const idPending= req.params.idPending;
    if(idPending.getAction().equals("delete")){
        idJob=req.params.idJob;
        const newjobPending= await Pending.delete(idJob);
        res.status(201).json({newjobPending}); 
        idPending.setStatus("denied")
    }


}








module.exports = {
    acceptPending,
    deletePending
}