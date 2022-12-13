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



/**
 * Job APIs Routes
 */

 const JobController = require("../controllers/jobController");

 router.get("/jobs",JobController.getAllJob);
 router.post("/add_job",JobController.NewJobs);
 router.get("/jobs/:idJob",JobController.getSingleJob);
 router.delete("/jobs/:idJob",JobController.DeleteJob);


/**
 * Apply Job APIs Routes
 */
const ApplyController = require("../controllers/applyController");
router.post("/add_jobsApply",ApplyController.NewApplyJob);
router.get("/jobsApply",ApplyController.getAllApplyJobs)


/**
 * Pending APIs Routes
 */
const PendingController = require("../controllers/pendingController");
router.post("/acceptPending",PendingController.acceptPending);
router.delete("/deletePending/:idPending",PendingController.deletePending);
router.get("/pendingJob",PendingController.getAllJobPending);



 

module.exports = router;