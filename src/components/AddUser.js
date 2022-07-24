import React, { useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import { addUser } from '../services/Api'
import { useNavigate } from 'react-router-dom'

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

const AddUser = () => {

  const [user, setUser] = useState(initialValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    // console.log(user);
  }

  const addUserDetails = async() => {
    await addUser(user);
    navigate("/allusers");
  }

  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"/>
      </FormControl>

      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username"/>
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email"/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone"/>
      </FormControl>
      <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
    </Container>
  )
}

export default AddUser
