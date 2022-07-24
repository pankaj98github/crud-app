import React, { useState, useEffect } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import { getUsers } from '../services/Api'
import { editUser } from '../services/Api'
import { useNavigate, useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  & > div {
    margin-top: 20px;
  }
  & > button {
    margin-top: 30px;
  }
`

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: ""
}

const EditUser = () => {

  const [user, setUser] = useState(initialValue);

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    getUsersData();
  }, [])

  const getUsersData = async () => {
    let response = await getUsers(id);
    setUser(response.data);
  }

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    // console.log(user);
  }

  const addUserDetails = async() => {
    await editUser(user, id);
    navigate("/allusers");
  }

  return (
    <Container>
      <Typography variant='h4'>Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
      </FormControl>

      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
      </FormControl>
      <Button variant="contained" onClick={() => addUserDetails()}>Edit User</Button>
    </Container>
  )
}

export default EditUser
