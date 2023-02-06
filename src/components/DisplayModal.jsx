import React from "react"
import {
  Dialog,
  DialogTitle,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material"
import { FaTimes } from "react-icons/fa"

const DisplayModal = ({ open, close, fullScreen, title, children }) => {
  return (
    <div>
      <Dialog open={open} fullScreen={fullScreen} sx={{ borderRadius: 2 }}>
        {fullScreen ? (
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                onClick={close}
                aria-label='close'>
                <FaTimes />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        ) : (
          <DialogTitle>{title}</DialogTitle>
        )}

        {children}
      </Dialog>
    </div>
  )
}

export default DisplayModal
