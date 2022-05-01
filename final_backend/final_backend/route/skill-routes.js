import express from 'express';
import { createSkill, deleteSkill, editSkill, getSkill , getSkillById} from '../controller/skill-controller.js';

const skillroute=express.Router();

skillroute.get('/skills',getSkill);
skillroute.post('/createskill',createSkill);
skillroute.get('/skills/:id',getSkillById);
skillroute.put('/editskill/:id',editSkill);
skillroute.delete('/skills/:id',deleteSkill);

export default skillroute;