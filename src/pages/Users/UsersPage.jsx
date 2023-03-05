import React, { useContext, useEffect } from "react"
import { Container, Button } from "@mui/material"
import { Link } from "react-router-dom"
import DisplayCard from "../../components/DisplayCard"
import Sidebar from "../../components/Sidebar"
import DisplayTable from "../../components/DisplayTable"
import Flex from "../../components/Flex"
import { UserContext } from "../../context/UserContext"
import { UserSchema } from "../../schemas/UserSchema"

const UsersPage = () => {
  const { users, fetchUsers } = useContext(UserContext)

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      <Sidebar>
        <Container>
          <DisplayCard sx={{ my: 3, p: 5 }}>
            <Flex justify='end'>
              <Button
                slize='lg'
                variant='contained'
                component={Link}
                to='/add-user'>
                Add
              </Button>
            </Flex>

            <DisplayTable title='Users' source={users} schema={UserSchema} />
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default UsersPage
