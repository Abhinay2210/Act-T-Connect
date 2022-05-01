import { makeStyles, Fab, Button, TablePagination, Table, TableHead, TableCell, TableBody, TableRow, TableSortLabel, TextField} from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { getJobcategory } from "../Service/api";


const AllUsers=()=>{
    const [jobcategory, setJobcategory] = useState([]);

    useEffect(() => {
        getAllJobcategory();
    }, [])

    const getAllJobcategory= async()=>{
        const response=await getJobcategory();
        console.log(response.data);
        setJobcategory(response.data);
    }
    return(
        <>
        <div className="top-menu">
            <div className="top-left-menu">Dashboard</div>
            <div className="top-right-menu">
                <div className="right-menu"><i class="bi bi-house-door"></i> / Dashboard  </div>
            </div>
        </div>
        <div className="main-section">
            <div className="card-holder">
                <div className="cards cyan"> <h1>3</h1> <h6>Total Openings</h6> </div>
                <div className="cards blue"> <h1>20</h1> <h6>Total Applications</h6> </div>
                <div className="cards green"> <h1>7</h1> <h6>Total Hired</h6> </div>
                <div className="cards black"> <h1>3</h1> <h6>Total Rejected</h6> </div>
                <div className="cards red"> <h1>2</h1> <h6>New Applications</h6> </div>
                <div className="cards yellow"> <h1>8</h1> <h6>Shortlisted Candidates</h6> </div>
                <div className="cards blue"> <h1>0</h1> <h6>Today Interviews</h6> </div>
            </div>
        </div>
        </>
    )
}

export default AllUsers;