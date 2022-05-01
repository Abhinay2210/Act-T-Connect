import React from "react";
import "./subscription.css";
import {
  makeStyles,
  Fab,
  Button,
  TablePagination,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableSortLabel,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import Switch from "@mui/material/Switch";

function Subscribe() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className="top-menu">
        <div className="top-left-menu">Subscription</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i class="bi bi-house-door"></i> / Subscription
          </div>
        </div>
      </div>
      <div className="mainc">
        <div className="subd">
          <Button id="subd" variant="outlined" startIcon={<BookIcon />}>
            Subscription Details
          </Button>
        </div>

        

        <div className="subcards">
          <div className="row1">
            <div className="card1">
              <div className="headc" startIcon={<CloseIcon />}>
                <h3>Professional</h3>
              </div>
              <h5>$ 20/ mo</h5>

              <p>
                <IconButton aria-label="delete">
                  <CloseIcon /> Career Website
                </IconButton>
              </p>
              <p>
                <IconButton aria-label="delete">
                  <CloseIcon /> Roles and permissions
                </IconButton>
              </p>
              <p>4 active jobs</p>
              <p>100 candidate access</p>
            </div>

            <div className="card1">
              <div className="headc">
                <h3>Expert</h3>
              </div>
              <h5>$ 40/ mo</h5>
              <p>
                <IconButton aria-label="delete">
                  <CheckIcon /> Career Website
                </IconButton>
              </p>
              <p>
                <IconButton aria-label="delete">
                  <CheckIcon /> Roles and permissions
                </IconButton>
              </p>
              <p>10 active jobs</p>
              <p>500 candidate access</p>
            </div>

            <div className="card1">
              <div className="headc">
                <h3>Candidate</h3>
              </div>
              <h5>$ 40/ mo</h5>
              <p>
                <IconButton aria-label="delete">
                  <CheckIcon /> Career Website
                </IconButton>
              </p>
              <p>
                <IconButton aria-label="delete">
                  <CheckIcon /> Roles and permissions
                </IconButton>
              </p>
              <p>Unlimited active jobs</p>
              <p>Unlimited candidate access</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
