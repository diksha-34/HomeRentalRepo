import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AdminNaviagation from '../../Components/Navigation/AdminNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { findAllUsers } from '../../State/UserDetails/Action';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'title', label: 'Home Title', minWidth: 100 },
  { id: 'areaType', label: 'Area Type', minWidth: 100 },
  { id: 'location', label: 'Location', minWidth: 100 },
  { id: 'bath', label: 'Bathrooms', minWidth: 100 },
  { id: 'bed', label: 'Bedrooms', minWidth: 100 },
  { id: 'price', label: 'Price', minWidth: 100 },
  { id: 'squareFeet', label: 'Square Feet', minWidth: 100 },
  { id: 'paymentId', label: 'Payment Id', minWidth: 100 },
  { id: 'status', label: 'Payment Status', minWidth: 100 },
];

export default function UserDetails() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUser);

  useEffect(() => {
    console.log("Fetching user details...");
    dispatch(findAllUsers());

    console.log("users are: ",users)
  }, [dispatch]);

  return (
    <>
      <AdminNaviagation />
      <br />
      <br />
      <br />
      <br />
      <TableContainer sx={{ maxHeight: 440, marginInline: '20px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell align="center">{user.firstName} {" "} {user.lastName}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.title}</TableCell>
                  <TableCell align="center">{user.areaType}</TableCell>
                  <TableCell align="center">{user.location}</TableCell>
                  <TableCell align="center">{user.bath}</TableCell>
                  <TableCell align="center">{user.size}</TableCell>
                  <TableCell align="center">{user.price}</TableCell>
                  <TableCell align="center">{user.squareFeet}</TableCell>
                  <TableCell align="center">{user.paymentId}</TableCell>
                  <TableCell align="center">{user.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
