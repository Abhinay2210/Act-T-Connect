import axios from "axios";

const url='http://localhost:9000';

//job category API's
export const getJobcategory= async (id)=>{
    id=id || '';
    return await axios.get(`${url}/job-categories/${id}`);
}

export const createJobcategory= async (user)=>{
    return await axios.post(`${url}/createjobcategory`,user);
}

export const editJobcategory= async (id,user)=>{
    return await axios.put(`${url}/editjobcategory/${id}`,user);
}

export const deleteJobcategory= async (id)=>{
    return await axios.delete(`${url}/job-categories/${id}`);
}

//job location API's
export const getJobLocation= async (id)=>{
    id=id || '';
    return await axios.get(`${url}/locations/${id}`);
}

export const createJobLocation= async (user)=>{
    return await axios.post(`${url}/createlocation`,user);
}

export const editJobLocation= async (id,user)=>{
    return await axios.put(`${url}/editlocation/${id}`,user);
}

export const deleteJobLocation= async (id)=>{
    return await axios.delete(`${url}/locations/${id}`);
}

//job Skill API's
export const getSkill= async (id)=>{
    id=id || '';
    return await axios.get(`${url}/skills/${id}`);
}

export const createSkill= async (user)=>{
    return await axios.post(`${url}/createskill`,user);
}

export const editSkill= async (id,user)=>{
    return await axios.put(`${url}/editskill/${id}`,user);
}

export const deleteSkill= async (id)=>{
    return await axios.delete(`${url}/skills/${id}`);
}