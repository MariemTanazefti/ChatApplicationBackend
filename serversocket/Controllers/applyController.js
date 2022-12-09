var Apply=require("../models/apply")


const ApplyJob = async (req, res) => {
    try{
      let [Response] = await Apply.findid(req.params.id);
      console.log(req.params.id)
      res.status(200).json(Response);
    }catch(err){
      res.status(404).json({
        message:"errer"
      
    })
  }}



  module.exports = {
    ApplyJob
  }    
