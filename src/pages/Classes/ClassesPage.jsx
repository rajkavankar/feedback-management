import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, Button } from "@mui/material"
import Sidebar from "../../components/Sidebar"
import DisplayCard from "../../components/DisplayCard"
import DisplayTable from "../../components/DisplayTable"
import Flex from "../../components/Flex"
import { ClassContext } from "../../context/ClassContext"
import { ClassSchema } from "../../schemas/ClassesSchema"

const ClassesPage = () => {
  const { classes, fetchClasses } = useContext(ClassContext)

  useEffect(() => {
    fetchClasses()
  }, [fetchClasses])

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
                to='/add-class'>
                Add Class
              </Button>
            </Flex>
            <DisplayTable
              title='Classes'
              source={classes}
              schema={ClassSchema}
            />
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default ClassesPage
