import { makeStyles, Fab, Button, TablePagination, Table, TableHead, TableCell, TableBody, TableRow, TableSortLabel, TextField} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import { deleteJobcategory, getJobcategory } from "../Service/api";
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

    const [jobcategory, setJobcategory] = useState([]);
    const classes=useStyles();

    const pages=[5,10,25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();
    const [filterFn, setFilterFn] = useState({fn: items=>{ return items;}});

    useEffect(() => {
        getAllJobcategory();
    }, [])

    const getAllJobcategory= async()=>{
        const response=await getJobcategory();
        console.log(response.data);
        setJobcategory(response.data);
    }

    const deleteUserData=async(id)=>{
        await deleteJobcategory(id);
        getAllJobcategory(); 
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
                        return items.filter(x=>x.categoryname.toLowerCase().includes(target.value));
                }
            }
        );
    }

    const records=()=>{
        return filterFn.fn(jobcategory).slice(page*rowsPerPage,(page+1)*rowsPerPage);
    }

    const handleSortRequest = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
    
    return(
        <>
        <div className="top-menu">
            <div className="top-left-menu">Job Categories</div>
            <div className="top-right-menu">
                <div className="right-menu"><i class="bi bi-house-door"></i> / Job Categories  
                <Link style={{ textDecoration: 'none' }} to='/admin/createjobcategory' >&nbsp;&nbsp;
                <Button variant="contained" color="primary"><i class="bi bi-plus-circle"></i >&nbsp; Create new</Button>
                </Link>
                </div>
            </div>
        </div>
        <div className="table-container">
            <div className="table-users">
                <div className="searchbar">
                    Search:&nbsp;&nbsp; <TextField id="outlined-search" label="" variant="outlined" type="search" onChange={handleSearch} />
                </div>
                <div className="table-wrapper">
                    
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow  className={classes.thead}>
                            <TableCell >
                                Name
                            </TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {records().map(jobcategories=>(
                                <TableRow>
                                <TableCell>{jobcategories.categoryname}</TableCell> 
                                <TableCell>
                                    <Fab color="primary" aria-label="edit" size="small" style={{margin:4,marginRight:6}} component={Link} to={`/admin/editjobcategory/${jobcategories._id}`}>
                                    <EditIcon/>
                                    </Fab>
                                    <Fab color="secondary" aria-label="edit" size="small" style={{margin:4}} onClick={()=>deleteUserData(jobcategories._id)}>
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
                        count={jobcategory.length}
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