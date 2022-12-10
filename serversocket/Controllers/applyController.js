var Apply=require("../models/apply")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

/* const ApplyJob = async (req, res) => {
    try{
      let [Response] = await Apply.findid(req.params.id);
      console.log(req.params.id)
      res.status(200).json(Response);
    }catch(err){
      res.status(404).json({
        message:"errer"
      
    })
  }} */
  
    /**
 * New applyjob.
 */
   
  const NewApplyJob = async (req, res) => {    
   /*  try {
      
      jobseeker= req.body.jobseeker,
      job= req.body.job;
      const newApplyJob = await Apply.save();
      res.status(201).json({ message: "Operation Succeded", newApplyJob });
    } catch (err) {
      res.status(500);
      throw err;
    } */
    try{
      idJob = req.body.idJob;
      console.log(req.body.idJob)
      idUser= req.body.idUser;
      name1= req.body.name;
      email= req.body.email;
      adresse= req.body.adresse;
      cv= req.body.cv;
      motivation= req.body.motivation;
      const newjobApply= await Apply.save(idJob,idUser,name1,email,adresse,cv,motivation);
      res.status(201).json({newjobApply}); 
  
  
     }catch(err){
      res.status(404).json({
        message:"No jobApply added"
      });
      throw err;
  
     }
   
 
  };

    
    /**
 * Get all applyjob.
 */
    const getAllApplyJobs = async (req, res) => {
      try {
      const[ApplyJobsList] = await Apply.getAll();
      res.status(200).json({ApplyJobsList });
    } catch (err) {
      res.status(404).json({
        message: "No Data Found.",
      });
      throw err;
    }
    };
   
  



  module.exports = {
    //ApplyJob,
    NewApplyJob,
    getAllApplyJobs
  }    
