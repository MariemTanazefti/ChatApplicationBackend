const express = require("express");
const router = express.Router();



 /**
 * Jobseeker APIs Routes
 */


const UserController = require("../controllers/userController");

router.get("/users", UserController.getAllUser);
router.post("/users_jobseeker", UserController.NewJobseeker);
router.post("/users_recruiter", UserController.NewRecruiter);
router.put("/users/:id", UserController.UpdateUser);
router.post("/Login", UserController.Login);
router.get("/users/:id", UserController.getSingleUser);




/* router.get("/users/:id", UserController.getSingleUser);
 */


/**
 * Job APIs Routes
 */

 const JobController = require("../controllers/jobController");

 router.get("/jobs",JobController.getAllJob);
 router.post("/add_job",JobController.NewJobs);
 router.get("/jobs/:id",JobController.getSingleJob);
 router.delete("/jobs/:id",JobController.DeleteJob);


module.exports = router;