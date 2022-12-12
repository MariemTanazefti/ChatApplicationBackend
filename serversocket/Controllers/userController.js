var  User  = require("../models/user");
var Job = require("../models/job")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;


/**
 * Get all Users.
 */
 const getAllUser = async (req, res) => {
    try {
        console.log("ddd")
      const[ UsersList] = await User.getAll();
      res.status(200).json({UsersList });
    } catch (err) {
      res.status(404).json({
        message: "No Data Found.",
      });
      throw err;
    }
  };

  /**
 * add user jobseeker.
 */

 const NewJobseeker = async (req, res,next) => {
 
   try{
    console.log("aaaaa")
    name1 = req.body.name;
    console.log(name1);
    phoneNumber=  req.body.phoneNumber;
    adresse = req.body.adresse;
    email = req.body.email;
    password = req.body.password;
    profile= "Jobseeker";
  
    const user= await User.save(name1,phoneNumber,adresse,email,password,profile);
    res.status(201).json({user}); 


   }catch(err){
    res.status(404).json({
      message:"No user added"
    });
    throw err;

   }
 }


   /**
 * add user recruiter.
 */

const NewRecruiter = async (req, res, next) =>{
  try{
    console.log("aaaaa")
    name1 = req.body.name;
    console.log(name1);
    phoneNumber=  req.body.phoneNumber;
    adresse = req.body.adresse;
    email = req.body.email;
    password = req.body.password;
    profile= "Recruiter";
  
    const user= await User.save(name1,phoneNumber,adresse,email,password,profile);
    res.status(201).json({user}); 


   }catch(err){
    res.status(404).json({
      message:"No user added"
    });
    throw err;

   }

}


/**
 * Update an existing User.
 */

 const UpdateUser = async (req, res) => {
  try{
    console.log("aaaaa")
    idUser = req.params.idUser;
    console.log(req.params['idUser']);
    name1 = req.body.name;
    console.log(name1);
    phoneNumber=  req.body.phoneNumber;
    adresse = req.body.adresse;
    email = req.body.email;
    password = req.body.password;
    cv = req.body.cv;
    //profile= "Recruiter";
  
    const user= await User.update(idUser,name1,phoneNumber,adresse,email,password,cv);
    res.status(201).json({user}); 


   }catch(err){
    res.status(404).json({
      message:"No user updated"
    });
    throw err;

   }

};



/**
 * Login User.
 */

const Login = async (req, res) => {
  try{
    console.log("login")
    email=req.body.email;
    password=req.body.password;
    const [user]= await User.findOne(email,password);
    if(email && password){
      res.status(201).json({user}); 

    }

  }catch(err){
    res.status(404).json({
      message:"Error"
    });
    throw err;

   }

  
  }  

/**
   * get user par id
   */
   
 const getSingleUser = async (req, res) => {
  try{
    const idUser = req.params.idUser;
    console.log(req.params.idUser)
    console.log("hello")
    const [user] = await User.findById(idUser);
    res.status(200).json({  user});


  }catch(err){
    res.status(404).json({
      message: "No Data Found.",
    });
    throw err;
    


  

  }
}






 
  




module.exports = {
getAllUser,
NewJobseeker,
NewRecruiter,
UpdateUser,
Login,
getSingleUser

}