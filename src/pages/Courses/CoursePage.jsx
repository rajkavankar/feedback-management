import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, Button } from "@mui/material"
import Sidebar from "../../components/Sidebar"
import DisplayCard from "../../components/DisplayCard"
import DisplayTable from "../../components/DisplayTable"
import Flex from "../../components/Flex"
import { CourseSchema } from "../../schemas/CoursesSchema"
import { CourseContext } from "../../context/CourceContext"

const CoursePage = () => {
  const { courses, fetchCourses } = useContext(CourseContext)

  useEffect(() => {
    fetchCourses()
    console.log("invoked")
  }, [fetchCourses])
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
                to='/add-course'>
                Add Course
              </Button>
            </Flex>
            <DisplayTable
              title='Courses'
              source={courses}
              schema={CourseSchema}
            />
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default CoursePage
