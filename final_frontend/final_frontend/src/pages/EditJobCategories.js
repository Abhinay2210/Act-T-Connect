import { Button, FormControl, FormGroup, Input, InputLabel ,Link,makeStyles, Typography} from "@material-ui/core";
import { useEffect, useState } from "react";
import { addUser, editJobcategory, getJobcategory} from "../Service/api";
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
    categoryname:''
}


const EditJobCategories=()=>{
    const [user, setUser] = useState(initialValues);
    const {categoryname}=user;
    const {id}=useParams();
    const classes=useStyles();
    const history=useHistory();

    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData= async()=>{
        const response=await getJobcategory(id);
        console.log(response.data);
        setUser(response.data);
    }

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const editUserDetails= async ()=>{
        await editJobcategory(id,user);
        history.push('/admin/job-categories');
    }

    return(
        <>
            <div className={classes.create}>
                <div className={classes.form}>
                <FormGroup className={classes.container}>
                    <Typography variant="h4">Edit Information</Typography>
                    <FormControl>
                        <InputLabel>Job Category Name</InputLabel>
                        <Input onChange={(e)=>onValueChange(e)} name="categoryname" value={categoryname}/>
                    </FormControl>
                    <Button className={classes.buttonstyle} variant="contained" onClick={()=>editUserDetails()} color="primary"><i class="bi bi-check-lg"></i>&nbsp;save</Button>
                </FormGroup>
                </div>
            </div>
        </>
    )
}

export default EditJobCategories;