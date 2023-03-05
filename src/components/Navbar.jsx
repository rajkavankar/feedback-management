import React from "react"
import { Link } from "react-router-dom"
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Container,
} from "@mui/material"

const Navbar = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Button component={Link} to='/' color='inherit'>
              Home
            </Button>
            <Button component={Link} to='/login' color='inherit'>
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

Navbar.defaultProps = {
  title: "Feedback-system",
}

export default Navbar
