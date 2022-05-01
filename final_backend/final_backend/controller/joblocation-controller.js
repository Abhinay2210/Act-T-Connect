
import joblocations from "../model/joblocation-schema.js";

export const getJoblocation= async (request,response)=>{
        try{
                let user= await joblocations.find();
                response.json(user);
        }catch(error){
                response.json({message:error.message});
        }
}

export const createJoblocation= async (request,response)=>{
        const user=request.body;
        console.log(user);
        const newUser= new joblocations(user);

        try{
                await newUser.save();
                response.json(newUser);
        }catch(error){
                response.json({message:error.message});
        }
}

export const getLocationById= async (request,response)=>{
        const id=request.params.id;
        try{
                const user= await joblocations.findById(id);
                response.json(user);
        }catch(error){
                response.json(message);
        }
}

export const editJoblocation= async (request,response)=>{
        const user=request.body;
        const editUser=new joblocations(user);
        try{
                await joblocations.updateOne({_id: request.params.id},editUser);
                response.json(editUser);
        }catch(error){
                response.json(message);
        }
}

export const deleteJoblocation= async (request,response)=>{
        try{
                await joblocations.deleteOne({_id: request.params.id});
                response.json("User Deleted Sucessfully");
        }catch(error){
                response.json(message);
        }
}