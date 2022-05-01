import React from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel ,makeStyles, TextField, Typography} from "@material-ui/core";
import { useState } from "react";
import {createJobLocation} from "../Service/api";
import Autocomplete from '@material-ui/lab/Autocomplete';
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
    locationname:'',
    countryname:''
}


const CreateJobCategories=()=>{
    const [user, setUser] = useState(initialValues);
    const {locationname,countryname}=user;

    const classes=useStyles();
    const history=useHistory();

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails=async()=>{
        await createJobLocation(user);
        history.push('./locations');
    }
    const options = ['India', 'Japan', 'Russia', 
  'Pakistan', 'Australia', 'China'];

    return(
        <>
            <div className={classes.create}>
                <div className={classes.form}>
                <FormGroup className={classes.container}>
                    <Typography variant="h4">Create</Typography>
                    <FormControl>
                        <InputLabel>Location Name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="locationname" value={locationname}/>
                    </FormControl>
                    <FormControl>
                    {/* <Autocomplete
                            options={options}
                            style={{ width: 300 }}
                            renderInput={(params) =>
                            <TextField {...params} label="Combo box" variant="outlined" onChange={(e)=>onValueChange(e)} name="countryname" value={params} />}
                        /> */}
                        <InputLabel>Country  Name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="countryname" value={countryname}/>
                    </FormControl>
                    {/* <FormControl>
                        <InputLabel>Username</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="mail" value={mail}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Phone</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
                    </FormControl> */}
                    <Button className={classes.buttonstyle} variant="contained" onClick={()=>addUserDetails()} color="primary"><i class="bi bi-check-lg"></i>&nbsp;Save</Button>
                </FormGroup>
                </div>
            </div>
        </>
    )
}

export default CreateJobCategories;