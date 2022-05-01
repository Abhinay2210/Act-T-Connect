import mongoose from 'mongoose';
import autoIncrement, { initialize } from "mongoose-auto-increment";

const joblocationSchema=mongoose.Schema({
    locationname: String,
    countryname: String
});

autoIncrement.initialize(mongoose.connection);
joblocationSchema.plugin(autoIncrement.plugin,'joblocation');
const joblocations=mongoose.model('joblocations',joblocationSchema);

export default joblocations;