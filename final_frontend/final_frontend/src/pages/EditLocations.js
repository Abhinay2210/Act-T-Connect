import { Button, FormControl, FormGroup, Input, InputLabel ,Link,makeStyles, Typography} from "@material-ui/core";
import { useEffect, useState } from "react";
import {   editJobLocation, getJobLocation} from "../Service/api";
import { useHistory , useParams} from "react-router";

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


const EditJobCategories=()=>{
    const [user, setUser] = useState(initialValues);
    const {locationname,countryname}=user;
    const {id}=useParams();
    const classes=useStyles();
    const history=useHistory();

    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData= async()=>{
        const response=await getJobLocation(id);
        console.log(response.data);
        setUser(response.data);
    }

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const editUserDetails= async ()=>{
        await editJobLocation(id,user);
        history.push('/admin/locations');
    }

    return(
        <>
            <div className={classes.create}>
                <div className={classes.form}>
                <FormGroup className={classes.container}>
                    <Typography variant="h4">Edit</Typography>
                    <FormControl>
                        <InputLabel>Location Name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="locationname" value={locationname}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Country Name</InputLabel>
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
                    <Button className={classes.buttonstyle} variant="contained" onClick={()=>editUserDetails()} color="primary"><i class="bi bi-check-lg"></i>&nbsp;save</Button>
                </FormGroup>
                </div>
            </div>
        </>
    )
}

export default EditJobCategories;