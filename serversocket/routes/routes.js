const express = require("express");
const router = express.Router();



 /**
 * Jobseeker APIs Routes
 */


const UserController = require("../controllers/userController");

router.get("/users", UserController.getAllUser);
router.post("/users_jobseeker", UserController.NewJobseeker);
router.post("/users_recruiter", UserController.NewRecruiter);
router.put("/users/:idUser", UserController.UpdateUser);
router.post("/Login", UserController.Login);
router.get("users/:idUser", UserController.getSingleUser)






/* router.get("/users/:id", UserController.getSingleUser);
 */


/**
 * Job APIs Routes
 */

 const JobController = require("../controllers/jobController");

 router.get("/jobs",JobController.getAllJob);
 router.post("/add_job",JobController.NewJobs);
 router.get("/jobs/:idJob",JobController.getSingleJob);
 router.delete("/jobs/:idJob",JobController.DeleteJob);
// router.get("/jobsUser/:id",JobController.ApplyJob)


const ApplyController = require("../Controllers/applyController");
router.post("/jobsApply",ApplyController.NewApplyJob)
 

module.exports = router;