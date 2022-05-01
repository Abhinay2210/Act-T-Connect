
import skills from "../model/skill-schema.js";

export const getSkill= async (request,response)=>{
        try{
                let user= await skills.find();
                response.json(user);
        }catch(error){
                response.json({message:error.message});
        }
}

export const createSkill= async (request,response)=>{
        const user=request.body;
        console.log(user);
        const newUser= new skills(user);

        try{
                await newUser.save();
                response.json(newUser);
        }catch(error){
                response.json({message:error.message});
        }
}

export const getSkillById= async (request,response)=>{
        const id=request.params.id;
        try{
                const user= await skills.findById(id);
                response.json(user);
        }catch(error){
                response.json(message);
        }
}

export const editSkill= async (request,response)=>{
        const user=request.body;
        const editUser=new skills(user);
        try{
                await skills.updateOne({_id: request.params.id},editUser);
                response.json(editUser);
        }catch(error){
                response.json(message);
        }
}

export const deleteSkill= async (request,response)=>{
        try{
                await skills.deleteOne({_id: request.params.id});
                response.json("User Deleted Sucessfully");
        }catch(error){
                response.json(message);
        }
}