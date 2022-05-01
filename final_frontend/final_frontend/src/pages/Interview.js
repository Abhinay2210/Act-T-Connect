import React from "react";
import './interview.css';
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
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./JobCategories.css";
import Stack from '@mui/material/Stack';

const Interview = () => {
  return (
    <>
      <div className="top-menu">
        <div className="top-left-menu">Interview Schedule</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i className="bi bi-house-door"></i> / Interview Schedule
          </div>
        </div>
      </div>

      <div className="mainc">
      <div id="buttons">
        <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          <i className="bi bi-table"></i>&nbsp; Table view
        </Button>
        <Button variant="contained" color="secondary">
          <i className="bi bi-plus"></i>&nbsp; Add interview schedule
        </Button>
        </Stack>
        
      </div>

      <Calendar/>
      </div>
    </>
  );
};

export default Interview;