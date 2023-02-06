import React from "react"
import Navbar from "../components/Navbar"
import Flex from "../components/Flex"
import DisplayCard from "../components/DisplayCard"
import { Container, Button } from "@mui/material"
import { Link } from "react-router-dom"
import ForgotPasswordForm from "../forms/ForgotPasswordForm"

const ForgotPasswordPage = () => {
  return (
    <div>
      <Navbar />
      <Container
        style={{ height: "80vh", display: "grid", placeItems: "center" }}>
        <Flex>
          <DisplayCard style={{ minWidth: "25vw" }}>
            <ForgotPasswordForm />
            <Flex>
              <Button component={Link} to='/login'>
                Back
              </Button>
            </Flex>
          </DisplayCard>
        </Flex>
      </Container>
    </div>
  )
}

export default ForgotPasswordPage
