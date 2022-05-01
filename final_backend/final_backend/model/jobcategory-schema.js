import mongoose from 'mongoose';
import autoIncrement, { initialize } from "mongoose-auto-increment";

const jobcategorySchema=mongoose.Schema({
    categoryname: String,
});

autoIncrement.initialize(mongoose.connection);
jobcategorySchema.plugin(autoIncrement.plugin,'jobcategory');
const jobcategories=mongoose.model('jobcategories',jobcategorySchema);

export default jobcategories;