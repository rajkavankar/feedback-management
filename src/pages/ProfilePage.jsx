import React from "react"
import { Container } from "@mui/material"
import DisplayCard from "../components/DisplayCard"
import Sidebar from "../components/Sidebar"

const ProfilePage = () => {
  return (
    <div>
      <Sidebar>
        <Container>
          <DisplayCard>
            <h1>Proflie</h1>
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default ProfilePage
