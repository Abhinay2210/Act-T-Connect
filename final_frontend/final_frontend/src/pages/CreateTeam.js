import React from 'react'
import { makeStyles, Button,  InputLabel, Input, FormControl, FormGroup} from "@material-ui/core";
import "./profile.css";
import avatar from "../assets/avatar.png";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const useStyles=makeStyles({
    container:{
        // width:'clamp(200px,80%,600px)',
        width:'95%',
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
        // marginTop:'30px',
        border:'rgba(0, 0, 0, 0.349) 1px solid',
    },
    create:{
        width:'100%',
        background:'#eee',
    },
    buttonstyle:{
        width:'90px',
        marginTop:'5px',
        marginBottom:'0px',
        marginRight:'7px',
    },
    formcontrol:{
        marginTop:'20px',
        fontWeight:'600',
    }
   
})

const roles = [
    {
      value: 'Ar',
      label: 'Artist',
    },
    {
      value: 'DV',
      label: 'Developer',
    },
    {
      value: 'MAN',
      label: 'Manager',
    },
    {
      value: 'UID',
      label: 'UI Designer',
    },
  ];


function CreateTeam() {

   
    const classes=useStyles();
    
    const PreviewImage=()=> {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview").src = oFREvent.target.result;
        };
      
        }


        const [role, setRole] = React.useState('MAN');

        const handleChange = (event) => {
          setRole(event.target.value);
        };
  return (
   <>
   <div className="top-menu">
            <div className="top-left-menu">Create Team</div>
            <div className="top-right-menu">
                <div className="right-menu"><i class="bi bi-house-door"></i> / Create Team  
                </div>
            </div>
        </div>
        <div className={classes.create}>
                <div className={classes.form}>
                <FormGroup className={classes.container}>
                    <label style={{fontWeight:'600'}}>Name</label>
                    <FormControl>
                        <Input name="name" placeholder="Admin" required/>
                    </FormControl>
                    <label  className={classes.formcontrol}>Email</label>
                    <FormControl>
                        <Input  name="email" type="email"  placeholder="admin@example.com" required/>
                    </FormControl>
                    <label  className={classes.formcontrol}>Password</label>
                    <FormControl >
                        <Input  name="password"  placeholder="Password" type="password" required/>
                    </FormControl>
                    <label  className={classes.formcontrol}>Mobile</label>
                    <FormControl>
                        {/* <div> */}
                        <Input  name="mobile" type="mobile" placeholder="mobile" required/>
                        {/* <Input  name="mobile" type="mobile" required/> */}
                        {/* </div> */}
                    </FormControl>
                    <label  className={classes.formcontrol}>Image</label>
                        <div className="card">
                            <div className="card-body">
                                <div className="dropify-wrapper has-preview">
                                    <div className="dropify-message">
                                        <span className="file-icon"></span> 
                                        <p>Drag and drop a file here or click</p>
                                    </div>
                                    <input id="uploadImage" className="dropify" type="file" name="myPhoto" accept=".png,.jpg,.jpeg" onChange={()=>PreviewImage()} />
                                    <div className="dropify-preview" style={{display: 'block'}}>
                                        <span className="dropify-render">
                                            <img id="uploadPreview" src={avatar} />
                                        </span>
                                        <div className="dropify-infos">
                                            <div className="dropify-infos-inner">
                                            <p className="dropify-filename">
                                                <span className="file-icon"></span> 
                                            </p>
                                            <p className="dropify-infos-message">Drag and drop a file or click to replace</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>

                        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className='input1'

          value={role}
          onChange={handleChange}
          helperText="Please select the role"
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>

                    <div>
                    <Button className={classes.buttonstyle} variant="contained" color="primary">Save</Button>
                    <Button className={classes.buttonstyle} variant="contained" color="secondary">Reset</Button>
                    </div>
                </FormGroup>
                </div>
            </div>
   </>
  )
}

export default CreateTeam