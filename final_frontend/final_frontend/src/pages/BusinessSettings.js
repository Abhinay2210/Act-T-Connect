import { makeStyles, Fab, Button, TablePagination, Table, TableHead, TableCell, TableBody, TableRow, TableSortLabel, TextField} from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JobCategories.css";

const AllUsers=()=>{
    return(
        <>
        <div className="top-menu">
            <div className="top-left-menu">Delete Account</div>
            <div className="top-right-menu">
                <div className="right-menu"><i class="bi bi-house-door"></i> / Delete Account  
                </div>
            </div>
        </div>
        </>
    )
}

export default AllUsers;