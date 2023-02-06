import React from "react"
import { Paper } from "@mui/material"

const DisplayCard = ({ children, ...otherProps }) => {
  return (
    <Paper sx={{ p: 3, borderRadius: 2 }} elevation={3} {...otherProps}>
      {children}
    </Paper>
  )
}

export default DisplayCard
