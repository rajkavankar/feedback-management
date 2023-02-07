import React, { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { Container, Button, Chip } from "@mui/material"
import Sidebar from "../../components/Sidebar"
import DisplayCard from "../../components/DisplayCard"

const SingleUserPage = () => {
  const { fetchSingleUser, singleUser } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    fetchSingleUser(id)
  }, [fetchSingleUser, id])

  return (
    <div>
      <Sidebar>
        <Container>
          <DisplayCard>
            <Button variant='outlined' component={Link} to='/users'>
              Back
            </Button>

            <h1>{singleUser.name}</h1>

            {singleUser.isAdmin ? (
              <Chip variant='soft' label='Admin' color='success' />
            ) : (
              <Chip variant='soft' label='User' color='primary' />
            )}
            <p>{singleUser.email}</p>
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default SingleUserPage
