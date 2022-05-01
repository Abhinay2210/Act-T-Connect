import express from 'express';
// import { createJoblocation, deleteJoblocation, editJoblocation, getJoblocation, getLocationById } from '../controller/joblocation-controller.js';
import { createJobcategory, deleteJobcategory, editJobcategory, getJobcategory, getUserById } from '../controller/jobcategory-controller.js';
// import { createSkill, deleteSkill, editSkill, getSkill , getSkillById} from '../controller/skill-controller.js';

const route=express.Router();
//job categories routes
route.get('/job-categories',getJobcategory);
route.post('/createjobcategory',createJobcategory);
route.get('/job-categories/:id',getUserById);
route.put('/editjobcategory/:id',editJobcategory);
route.delete('/job-categories/:id',deleteJobcategory);

//job location routes
// route.get('/locations',getJoblocation);
// route.post('/createlocation',createJoblocation);
// route.get('/locations/:id',getLocationById);
// route.put('/editlocation/:id',editJoblocation);
// route.delete('/locations/:id',deleteJoblocation);

// //job skill routes
// route.get('/skills',getSkill);
// route.post('/createskill',createSkill);
// route.get('/skills/:id',getSkillById);
// route.put('/editskill/:id',editSkill);
// route.delete('/skills/:id',deleteSkill);

export default route;