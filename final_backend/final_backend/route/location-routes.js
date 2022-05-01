import express from 'express';
import { createJoblocation, deleteJoblocation, editJoblocation, getJoblocation, getLocationById } from '../controller/joblocation-controller.js';

const locationroute=express.Router();

locationroute.get('/locations',getJoblocation);
locationroute.post('/createlocation',createJoblocation);
locationroute.get('/locations/:id',getLocationById);
locationroute.put('/editlocation/:id',editJoblocation);
locationroute.delete('/locations/:id',deleteJoblocation);

export default locationroute;