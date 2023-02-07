import React from "react"
import { Container, Button, Box } from "@mui/material"
import DisplayCard from "../components/DisplayCard"

const ExitPage = () => {
  const handleClose = () => {
    window.open("about:blank", "_self")
    window.close()
  }
  return (
    <div>
      <Container>
        <Box sx={{ mt: 5 }}>
          <DisplayCard>
            <h1>Thank you for Submission</h1>
            <Button
              sx={{ mt: 2, ml: 3 }}
              variant='contained'
              onClick={handleClose}>
              Done
            </Button>
          </DisplayCard>
        </Box>
      </Container>
    </div>
  )
}

export default ExitPage
