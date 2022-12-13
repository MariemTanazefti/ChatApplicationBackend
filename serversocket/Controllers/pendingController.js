var  Pending  = require("../models/pending");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const acceptPending = async(req,res) =>{
    const idPending= req.params.idPending;
    
        title = req.body.title;
        details= req.body.details;
        societyImage= req.body.societyImage;
        societyName= req.body.societyName;
        salary= req.body.salary;
        location= req.body.location;
        skills= req.body.skills;
        const newjobPending= await Pending.accept(title,details,societyImage,societyName,salary,location,skills);
        res.status(201).json({newjobPending}); 
      
    

}
  const deletePending = async(req,res) =>{
    const idPending= req.params.idPending;
    
        //idJob=req.params.idJob;
        const newjobPending= await Pending.delete(idPending);
        res.status(201).json({newjobPending}); 
        //idPending.setStatus("denied")
    


}  

/**
 * Get all Jobs Pending.
 */




const getAllJobPending = async (req, res) => {
    try {
        console.log("ddd")
      const[JobsListPending] = await Pending.getAll();
      res.status(200).json({JobsListPending});
    } catch (err) {
      res.status(404).json({
        message: "No Data Found.",
      });
      throw err;
    }
  };








module.exports = {
    acceptPending,
    deletePending,
    getAllJobPending
}