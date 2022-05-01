import express from 'express';
import route from './route/routes.js';
import skillroute from './route/skill-routes.js';
import locationroute from './route/location-routes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',route);
app.use('/',skillroute);
app.use('/',locationroute);

const PORT=9000;
// const URL='mongodb+srv://recruitment_portal:Z1geEVBzBe5ZBYuX@cluster0.owdo8.mongodb.net/admin_portal?retryWrites=true&w=majority';
const URL='mongodb://recruitment_portal:Z1geEVBzBe5ZBYuX@cluster0-shard-00-00.owdo8.mongodb.net:27017,cluster0-shard-00-01.owdo8.mongodb.net:27017,cluster0-shard-00-02.owdo8.mongodb.net:27017/admin_portal?ssl=true&replicaSet=atlas-dk52u0-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port: ${PORT}`);
    });
}).catch(error=>{
    console.log('Error: ',error.message);
})