import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, Button } from "@mui/material"
import Sidebar from "../../components/Sidebar"
import DisplayCard from "../../components/DisplayCard"
import DisplayTable from "../../components/DisplayTable"
import Flex from "../../components/Flex"
import { SubjectSchema } from "../../schemas/SubjectSchema"
import { SubjectsContext } from "../../context/SubjextsContext"

const SubjectsPage = () => {
  const { subjects, fetchSubjects } = useContext(SubjectsContext)

  useEffect(() => {
    fetchSubjects()

    // subjects.foreach((s) => subs.push(s))
    // subjects.forEach((sub) => {
    //   subs.push(sub.data)
    // })
  }, [fetchSubjects])

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
                to='/add-subject'>
                Add subject
              </Button>
            </Flex>
            <DisplayTable
              title='Subjects'
              source={subjects}
              schema={SubjectSchema}
            />
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default SubjectsPage
