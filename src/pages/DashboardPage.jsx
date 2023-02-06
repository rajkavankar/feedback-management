import React from "react"
import { Container } from "@mui/material"
import DisplayCard from "../components/DisplayCard"
import Sidebar from "../components/Sidebar"

const DashboardPage = () => {
  return (
    <div>
      <Sidebar>
        <Container>
          <DisplayCard>
            <h1>Dashboard</h1>
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default DashboardPage
