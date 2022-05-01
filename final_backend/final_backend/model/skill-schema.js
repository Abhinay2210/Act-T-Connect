import mongoose from 'mongoose';
import autoIncrement, { initialize } from "mongoose-auto-increment";

const skillSchema=mongoose.Schema({
    skillname: String,
    categoryname: String,
});

autoIncrement.initialize(mongoose.connection);
skillSchema.plugin(autoIncrement.plugin,'skills');
const skills=mongoose.model('skills',skillSchema);

export default skills;