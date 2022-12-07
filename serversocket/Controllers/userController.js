var  User  = require("../models/user");
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
  
    const user1= await User.save(name1,phoneNumber,adresse,email,password,profile);
    res.status(201).json({user1 }); 


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
  
    const user1= await User.save(name1,phoneNumber,adresse,email,password,profile);
    res.status(201).json({user1 }); 


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
    id = req.params.id;
    console.log(req.params['id']);
    name1 = req.body.name;
    console.log(name1);
    phoneNumber=  req.body.phoneNumber;
    adresse = req.body.adresse;
    email = req.body.email;
    password = req.body.password;
    //profile= "Recruiter";
  
    const user1= await User.update(id,name1,phoneNumber,adresse,email,password);
    res.status(201).json({user1 }); 


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
    const user1= await User.findOne(email,password);
    if(email && password){
      res.status(201).json({user1 }); 

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
    const id = req.params.id;
    console.log(req.params.id)
    const [user1] = await User.findById(id);
    res.status(200).json({  user1 });


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