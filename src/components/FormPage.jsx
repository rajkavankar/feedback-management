import React from "react"
import { Link } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material"
import { FaTimes } from "react-icons/fa"
import DisplayCard from "./DisplayCard"

const FormPage = ({ title, location, children }) => {
  return (
    <div>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            component={Link}
            to={location}
            aria-label='close'>
            <FaTimes />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 4 }}>
        <DisplayCard>{children}</DisplayCard>
      </Container>
    </div>
  )
}

export default FormPage
