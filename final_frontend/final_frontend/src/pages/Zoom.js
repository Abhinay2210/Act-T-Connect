import React from "react";
import "./JobCategories.css";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./zoom.css";

function Zoom() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [value, setValue] = React.useState("female");

  const handleChange1 = (event) => {
    setValue(event.target.value);
  };

  const notify = () => toast.error("This action is disabled for now!", {
    position: "bottom-right"});
  return (
    <>
      <div className="top-menu">
        <div className="top-left-menu">Zoom Settings</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i className="bi bi-house-door"></i> / Zoom Settings
          </div>
        </div>
      </div>
      <div className="table-container">
        <div className="table-users">
          <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
            <span className="titles">Zoom API Key</span>
            <OutlinedInput
              id="outlined-basic"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <span className="titles">Zoom Secret</span>
            <OutlinedInput
              id="outlined-basic"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <br />
            <span className="titles">Open in Zoom Client App?</span>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange1}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
            <br />
            <p>Webhook</p>
            <span className="titles">
              https://recruit-saas.froid.works/zoom-webhook
            </span>
            <br />
            <span>(Add this as your webhook URL in Zoom App)</span>
            
            <br />
            <Button onClick={notify} variant="contained" color="success" id="btnup" startIcon={<DoneIcon />}>
              Success
            </Button>
          </FormControl>
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "pink" }} />
    </>
  );
}

export default Zoom;
