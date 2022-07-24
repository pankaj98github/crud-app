import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import {NavLink} from 'react-router-dom'

const Header =styled(AppBar)`
border-radius: 10px;
`
const Tabs =styled(NavLink)`
font-size: 20px;
margin-right: 25px;
cursor: pointer;
color: white;
text-decoration: none;
`

const Navbar = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to="/">CRUD APP</Tabs>
            <Tabs to="/allusers">All Users</Tabs>
            <Tabs to="/adduser">Add User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar
