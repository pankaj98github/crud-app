import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { getUser, deleteUser } from "../services/Api";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const StyleTable = styled(Table)`
  width: 80%;
  margin: 3rem auto;
`;

const THead = styled(TableRow)`
  & > th {
    background: #000;
    color: white;
    font-size: 20px;
  }
`;
const TRow = styled(TableRow)`
  & > td {
    font-size: 1rem;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUser();
    // console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  }

  return (
    <StyleTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
            <Link to={`/edituser/${user.id}`}><Button variant="contained">Edit</Button></Link>
              <Button
                style={{
                  background: "red",
                  color: "white",
                  marginLeft: "12px"
                }}
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
              
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyleTable>
  );
};

export default AllUsers;
