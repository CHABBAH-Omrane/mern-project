import * as React from 'react';
import { Table, Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { customers, deleteCustomer } from "../../actions/adminActions";

export const UsersList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customers());
  }, []);

  const usersList = useSelector((state) => state.adminReducer.usersList);
  console.log("first", customers);

  return (
    <div id="contact">
      <TableContainer component={Paper} style={{ width: "80%", margin: "auto", fontSize: '10vw' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell align="center" style={{ fontSize: '1.5vw' }}>First Names</TableCell>
              <TableCell align="center" style={{ fontSize: '1.5vw' }}>Last Name</TableCell>
              <TableCell align="center" style={{ fontSize: '1.5vw' }}>Phone Number</TableCell>
              <TableCell align="center" style={{ fontSize: '1.5vw' }}>Email</TableCell>
              <TableCell align="center" style={{ fontSize: '1.5vw' }}>Adresse</TableCell>
              <TableCell align="center" style={{ width: "10%", fontSize: '1.5vw' }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map((el) => (
              <TableRow

                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" style={{ fontSize: '1.2vw' }}>{el.fname}</TableCell>
                <TableCell align="center" style={{ fontSize: '1.2vw' }}>{el.lname}</TableCell>
                <TableCell align="center" style={{ fontSize: '1.2vw' }}>{el.phoneNum}</TableCell>
                <TableCell align="center" style={{ fontSize: '1.2vw' }}>{el.e_mail}</TableCell>
                <TableCell align="center" style={{ fontSize: '1.2vw' }}>{el.adress}</TableCell>
                <Button
                  variant="outlined" color="error"
                  style={{ marginLeft: "20px", fontSize: '0.8vw' }}
                  onClick={() => dispatch(deleteCustomer(el._id))}
                >
                  {" "}
                  Delete{" "}
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
};
