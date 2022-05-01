import React, { useEffect } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel ,makeStyles, Typography} from "@material-ui/core";
import { useState } from "react";
import {createSkill, getJobcategory} from "../Service/api";
import { useHistory } from "react-router";

const useStyles=makeStyles({
    container:{
        width:'clamp(200px,80%,600px)',
        // marginTop:'50px',
    },
    form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        background:'white',
        width:'80%',
        margin:'auto',
        padding:'20px',
        borderRadius:'10px',
        marginTop:'30px',
        border:'rgba(0, 0, 0, 0.349) 1px solid',
    },
    create:{
        width:'100%',
        background:'#eee',
    },
    buttonstyle:{
        width:'90px',
        marginTop:'15px',
    },
})

const initialValues={
    skillname:'',
    categoryname:''
}


const CreateJobCategories=()=>{
    const [user, setUser] = useState(initialValues);
    const {skillname,categoryname}=user;
    const [jobcategory, setJobcategory] = useState([]);

    useEffect(() => {
        getAllJobcategory();
    }, [])

    const getAllJobcategory= async()=>{
        const response=await getJobcategory();
        console.log(response.data);
        setJobcategory(response.data);
    }

    const classes=useStyles();
    const history=useHistory();

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails=async()=>{
        await createSkill(user);
        history.push('./skills');
    }

    return(
        <>
            <div className={classes.create}>
                <div className={classes.form}>
                <FormGroup className={classes.container}>
                    <Typography variant="h4">Create</Typography>
                    <FormControl>
                        {/* <InputLabel>Category name</InputLabel> */}
                        {/* <Input list="categoryname" onChange={(e)=>onValueChange(e)} name="categoryname" value={categoryname}/> */}
                        <input 
                            style={
                                {
                                    padding:'10px',
                                    marginTop:'10px',
                                    borderRadius:'5px',
                                    border:'rgba(0, 0, 0, 0.349) 1px solid',
                                    marginBottom:'3px',
                                }
                            }
                            list="categoryname" 
                            onChange={(e)=>onValueChange(e)} 
                            name="categoryname" 
                            value={categoryname}
                            placeholder="select job category"
                        />
                        <datalist id="categoryname">
                            {jobcategory.map(jobcategories=>(
                                <option 
                                    value={jobcategories.categoryname}
                                    onChange={(e)=>onValueChange(e)}
                                    style={
                                        {
                                            padding:'10px',
                                            margin:'10px',
                                        }
                                    }
                                >
                                    {jobcategories.categoryname}
                                </option>
                            ))}
                        </datalist>
                        {/* <InputLabel>Category name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="categoryname" value={categoryname}/> */}
                    </FormControl>
                    <FormControl>
                        <InputLabel>Skill Name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="skillname" value={skillname}/>
                    </FormControl>
                    <Button className={classes.buttonstyle} variant="contained" onClick={()=>addUserDetails()} color="primary"><i class="bi bi-check-lg"></i>&nbsp;Save</Button>
                </FormGroup>
                </div>
            </div>
        </>
    )
}

export default CreateJobCategories;