import React, { useContext, useEffect, useState } from "react"
import { Container, Button, DialogActions, DialogContent } from "@mui/material"
import DisplayCard from "../../components/DisplayCard"
import Sidebar from "../../components/Sidebar"
import DisplayTable from "../../components/DisplayTable"
import Flex from "../../components/Flex"
import DisplayModal from "../../components/DisplayModal"
import { UserContext } from "../../context/UserContext"
import { UserSchema } from "../../schemas/UserSchema"
import UsersForm from "../../forms/UsersForm"

const UsersPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const { users, fetchUsers } = useContext(UserContext)

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <Sidebar>
        <Container>
          <DisplayModal
            fullScreen={true}
            open={openModal}
            close={() => setOpenModal(false)}
            title='Add user'>
            <DialogContent dividers>
              <UsersForm />
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setOpenModal(false)}>Close</Button>
            </DialogActions>
          </DisplayModal>
          <DisplayCard sx={{ my: 3, p: 5 }}>
            <Flex justify='end'>
              <Button
                slize='lg'
                variant='contained'
                onClick={() => setOpenModal(true)}>
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
