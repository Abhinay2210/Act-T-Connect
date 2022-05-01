
import jobcategories from "../model/jobcategory-schema.js";

export const getJobcategory= async (request,response)=>{
        try{
                let user= await jobcategories.find();
                response.json(user);
        }catch(error){
                response.json({message:error.message});
        }
}

export const createJobcategory= async (request,response)=>{
        const user=request.body;
        console.log(user);
        const newUser= new jobcategories(user);

        try{
                await newUser.save();
                response.json(newUser);
        }catch(error){
                response.json({message:error.message});
        }
}

export const getUserById= async (request,response)=>{
        const id=request.params.id;
        try{
                const user= await jobcategories.findById(id);
                response.json(user);
        }catch(error){
                response.json(message);
        }
}

export const editJobcategory= async (request,response)=>{
        const user=request.body;
        const editUser=new jobcategories(user);
        try{
                await jobcategories.updateOne({_id: request.params.id},editUser);
                response.json(editUser);
        }catch(error){
                response.json(message);
        }
}

export const deleteJobcategory= async (request,response)=>{
        try{
                await jobcategories.deleteOne({_id: request.params.id});
                response.json("User Deleted Sucessfully");
        }catch(error){
                response.json(message);
        }
}