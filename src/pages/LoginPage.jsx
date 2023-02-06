import React from "react"
import Navbar from "../components/Navbar"
import { Container } from "@mui/material"
import DisplayCard from "../components/DisplayCard"
import LoginForm from "../forms/LoginForm"
import Flex from "../components/Flex"

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <Container
        style={{ height: "80vh", display: "grid", placeItems: "center" }}>
        <Flex>
          <DisplayCard style={{ width: "35vw" }}>
            <LoginForm />
          </DisplayCard>
        </Flex>
      </Container>
    </div>
  )
}

export default LoginPage
