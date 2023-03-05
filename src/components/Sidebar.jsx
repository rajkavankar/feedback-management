import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Drawer,
  List,
  ListSubheader,
  Stack,
  ListItemText,
  Avatar,
  ListItemButton,
  ListItemIcon,
  Box,
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material"
import SidebarSchema from "../schemas/SidebarSchema"
import { MdMenu } from "react-icons/md"
import { UserContext } from "../context/UserContext"

const Sidebar = ({ children, title }) => {
  const { onLogOut, fetchLoggedInUser, loggedInUser } = useContext(UserContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchLoggedInUser()
  }, [])
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          mb: 3,
          ml: `${open ? "250px" : 0}`,
          transition: "all 0.4s",
        }}>
        <AppBar position='static'>
          <Container>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                onClick={() => setOpen(!open)}
                sx={{ mr: 2 }}>
                <MdMenu />
              </IconButton>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                {title}
              </Typography>

              <Button onClick={onLogOut} to='/login' color='inherit'>
                Logout
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Box sx={{ ml: `${open ? "250px" : 0}` }}>{children}</Box>
      <Drawer
        // onClose={true}
        variant='persistent'
        sx={{
          flexShrink: 0,
        }}
        open={open}
        anchor='left'>
        <List
          sx={{ width: 250, bgcolor: "background.paper" }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader
              component='div'
              style={{
                background: "#eceff1",
                margin: "0.5rem",
                padding: "0.5rem",
                borderRadius: "10px",
              }}>
              <Stack direction='row' spacing={2}>
                {/* <Avatar
                sx={{ bgcolor: deepPurple[500] }}
                style={{ marginTop: "10px" }}>
                SM
              </Avatar> */}
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  style={{
                    border: "2px solid #fff",
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                />
                <Stack direction='column' spacing={2}>
                  <h3 style={{ height: "5px" }}>{loggedInUser.name}</h3>
                  <small style={{ height: "40px" }}>
                    {loggedInUser.isAdmin ? "Admin" : "Faculty"}
                  </small>
                </Stack>
              </Stack>
            </ListSubheader>
          }>
          {SidebarSchema.map((item, index) => (
            <ListItemButton key={index} component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

Sidebar.defaultProps = {
  title: "Feedback-system",
}

export default Sidebar
