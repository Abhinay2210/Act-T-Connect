import { makeStyles, Fab, Button, TablePagination, Table, TableHead, TableCell, TableBody, TableRow, TableSortLabel, TextField} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import {  deleteJobLocation, getJobLocation } from "../Service/api";
import { Link } from "react-router-dom";
import "./JobCategories.css";

const useStyles=makeStyles({
    table:{
        // width:'80%',
        // margin:'auto',
        background:'white',
    },
    thead:{
        '& > *':{
            backgroundColor:'lightblue',
            // color:'blue',
            fontSize:16,
        }
    },
    users:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    }
});



const AllUsers=()=>{

    const [joblocation, setJobLocation] = useState([]);
    const classes=useStyles();

    const pages=[5,10,25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [filterFn, setFilterFn] = useState({fn: items=>{ return items;}});

    useEffect(() => {
        getAllJobLocation();
    }, [])

    const getAllJobLocation= async()=>{
        const response=await getJobLocation();
        console.log(response.data);
        setJobLocation(response.data);
    }

    const deleteLocationData=async(id)=>{
        await deleteJobLocation(id);
        getAllJobLocation(); 
    }

    const handleChangePage=(event,newPage)=>{
        setPage(newPage);
    }

    const handleChangeRowsPerPage=(event)=>{
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    }

    const handleSearch= e =>{
        let target=e.target;
        setFilterFn(
            {
                fn: items=>{
                    if(target.value==="")
                        return items;
                    else
                        return items.filter(x=>x.locationname.toLowerCase().includes(target.value));
                }
            }
        );
    }

    const records=()=>{
        return filterFn.fn(joblocation).slice(page*rowsPerPage,(page+1)*rowsPerPage);
    }
    
    return(
        <>
        <div className="top-menu">
            <div className="top-left-menu">Job Locations</div>
            <div className="top-right-menu">
                <div className="right-menu"><i class="bi bi-house-door"></i> / Job Locations  
                <Link style={{ textDecoration: 'none' }} to='/admin/createlocation' >&nbsp;&nbsp;
                <Button variant="contained" color="primary"><i class="bi bi-plus-circle"></i >&nbsp; Create new</Button>
                </Link>
                </div>
            </div>
        </div>
        <div className="table-container">
            <div className="table-users">
                <div className="searchbar">
                    {/* <p>Job Categories </p>    */}
                    Search:&nbsp;&nbsp; <TextField id="outlined-search" label="" variant="outlined" type="search" onChange={handleSearch} />
                </div>
                <div className="table-wrapper">
                    
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow  className={classes.thead}>
                            <TableCell >Job Locations</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {records().map(joblocations=>(
                                <TableRow>
                                {/* <TableCell></TableCell>  */}
                                <TableCell>{joblocations.locationname}</TableCell> 
                                <TableCell>{joblocations.countryname}</TableCell> 
                                <TableCell>
                                    <Fab color="primary" aria-label="edit" size="small" style={{margin:4,marginRight:6}} component={Link} to={`/admin/editlocation/${joblocations._id}`}>
                                    <EditIcon/>
                                    </Fab>
                                    {/* <div className="setbuttons">
                                    <div>
                                    <button className="button -blue center" component={Link} to={`/edit/${joblocations._id}`}><EditIcon/></button>
                                    </div>
                                    <div>
                                    <button className="button -salmon center" onClick={()=>deleteUserData(joblocations._id)}><DeleteIcon/></button>
                                    </div>
                                    </div> */}
                                    <Fab color="secondary" aria-label="edit" size="small" style={{margin:4}} onClick={()=>deleteLocationData(joblocations._id)}>
                                    <DeleteIcon/>
                                    </Fab>
                                    </TableCell> 
                                </TableRow>
                            ))}
                    </TableBody>
                    <TablePagination
                        component="div"
                        page={page}
                        rowsPerPageOptions={pages}
                        rowsPerPage={rowsPerPage}
                        count={joblocation.length}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Table>
                </div>
            </div>
        </div>
        </>
    )
}

export default AllUsers;