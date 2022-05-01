import { makeStyles, Button,  InputLabel, Input, FormControl, FormGroup} from "@material-ui/core";
// import "./JobCategories.css";
import "./profile.css";
import avatar from "../assets/avatar.png";

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

const AllUsers=()=>{ 
    const classes=useStyles();

    const PreviewImage=()=> {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview").src = oFREvent.target.result;
        };
    }
    return(
        <>
        <div className="top-menu">
            <div className="top-left-menu">My Profile</div>
            <div className="top-right-menu">
                <div className="right-menu"><i class="bi bi-house-door"></i> / My Profile  
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

export default AllUsers;
