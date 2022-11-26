var Job = require("../models/job")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;


/**
 * Get all Jobs.
 */




 const getAllJob = async (req, res) => {
    try {
        console.log("ddd")
      const[JobsList] = await Job.getAll();
      res.status(200).json({ message: "Operation Succeded", JobsList });
    } catch (err) {
      res.status(404).json({
        message: "No Data Found.",
      });
      throw err;
    }
  };


  /**
   * get job par id
   */
   
const getSingleJob = async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id)
  try {
    const job = await Job.findById(id);
    if (job == null) {
      res.status(404).json({
        message: "No Data Found with this Id.",
      });
    } else {
      res.status(200).json({ message: "Operation Succeded", job });
    }

  } catch (err) {
    res.status(404).json({
      message: "No Data Found with this Id.",
    });
    throw err;
  }
};


    /**
 * add job.
 */

 const NewJobs = async (req, res) => {
 
    try{
     title = req.body.title;
     
     details= req.body.details;
     societyImage= req.body.societyImage;
     societyName= req.body.societyName;
     salary= req.body.salary;
     location= req.body.location;
     skills= req.body.skills;
     const newjob= await Job.save(title,details,societyImage,societyName,salary,location,skills);
     res.status(201).json({ message: "Operation Succeded", newjob}); 
 
 
    }catch(err){
     res.status(404).json({
       message:"No job added"
     });
     throw err;
 
    }
  }


  /**
   * DELETE job
   */

   const DeleteJob = async (req, res) => {
    try{
      console.log("aaaaa")
      id = req.params.id;
    
      const delJob= await Job.delete(id);
      res.status(201).json({ message: "Operation Succeded", delJob }); 
  
  
     }catch(err){
      res.status(404).json({
        message:"No job deleted"
      });
      throw err;
  
     }
  
  };




  module.exports = {
    getAllJob,
    NewJobs,
    getSingleJob,
    DeleteJob,
  }    
