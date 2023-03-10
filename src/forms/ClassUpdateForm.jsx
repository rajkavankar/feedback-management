import React, { useContext, useEffect, useState } from "react"
import { Formik, Form } from "formik"
import { useNavigate, useParams } from "react-router-dom"
import { Grid, Button } from "@mui/material"
import * as Yup from "yup"
import TextInputWrapper from "../components/formik-components/TextInputWrapper"
import SelectInputWrapper from "../components/formik-components/SelectInputWrapper"
import {
  Table,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TextField,
  Autocomplete,
} from "@mui/material"
import SubmitButton from "../components/formik-components/SubmitButton"
import { ClassContext } from "../context/ClassContext"
import { CourseContext } from "../context/CourceContext"
import { UserContext } from "../context/UserContext"
import { SubjectsContext } from "../context/SubjextsContext"

const ClassForm = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const { id } = useParams()
  const {
    updateClass,
    singleClass,
    fetchSingleClass,
    AddFacutyToClass,
    RemoveFacutyToClass,
  } = useContext(ClassContext)

  const { fetchSubjects, subjects } = useContext(SubjectsContext)
  const { courses, fetchCourses } = useContext(CourseContext)
  const { users, fetchUsers } = useContext(UserContext)
  const [formData, setFormData] = useState({
    faculty: "",
    subject: "",
  })

  const { faculty, subject } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    fetchCourses()
    fetchSingleClass(id)
    fetchSubjects()
    fetchUsers()
    console.log(" invoke")
    console.log(users)
  }, [fetchCourses, fetchSingleClass, id, count])

  let courseOptions = []
  courses.forEach((course) => {
    courseOptions.push(course.data.title)
  })
  let subs = []
  subjects.forEach((sub) => {
    subs.push(sub.data.title)
  })
  let userNames = []
  users.forEach((uname) => {
    userNames.push(uname.data.name)
  })

  const initialValues = {
    title: singleClass.title,
    year: singleClass.year,
    division: singleClass.division,
    sem: singleClass.sem,
    course: singleClass.course,
  }
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    division: Yup.string().required("Division is required"),
    course: Yup.string().required("Course is required"),
    year: Yup.string().required("Year is required"),
    sem: Yup.number()
      .required("Sem is required")
      .min(1, "Minimum one sem is required"),
  })

  const handleAddFaculty = (e) => {
    e.preventDefault()

    const data = {
      faculty,
      subject,
    }
    console.log(data)
    AddFacutyToClass(id, data)
    setFormData({ faculty: "", subject: "" })
    setCount(count + 1)
  }

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)

    updateClass(id, values)
    onSubmitProps.resetForm()
    navigate("/classes")
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <TextInputWrapper type='text' name='title' label='Add title' />
            </Grid>
            <Grid item lg={6}>
              <TextInputWrapper type='number' name='sem' label='Add sem' />
            </Grid>
            <Grid item lg={6}>
              <TextInputWrapper
                type='text'
                name='division'
                label='Add division'
              />
            </Grid>
            <Grid item lg={6}>
              <TextInputWrapper type='text' name='year' label='Add year' />
            </Grid>

            <Grid item lg={12}>
              <SelectInputWrapper
                name='course'
                label='Select Course'
                options={courseOptions}
              />
            </Grid>
          </Grid>
          <h2>Facuties</h2>
          <Grid container sx={{ my: 2 }} spacing={2}>
            <Grid item lg={5}>
              <Autocomplete
                options={userNames}
                value={faculty}
                onChange={onChange}
                name='faculty'
                clearOnEscape
                renderInput={(params) => (
                  <TextField
                    {...params}
                    type='text'
                    variant='standard'
                    fullWidth
                    label='Add faculty'
                  />
                )}
              />
            </Grid>
            <Grid item lg={5}>
              <Autocomplete
                options={subs}
                value={subject}
                onChange={onChange}
                name='subject'
                clearOnEscape
                renderInput={(params) => (
                  <TextField
                    {...params}
                    type='text'
                    variant='standard'
                    fullWidth
                    label='Add subject'
                  />
                )}
              />
            </Grid>
            <Grid item lg={2}>
              <Button variant='contained' onClick={handleAddFaculty}>
                add
              </Button>
            </Grid>
          </Grid>
          <TableContainer sx={{ my: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow style={{ background: "#333" }}>
                  <TableCell style={{ color: "#fff" }} align='center'>
                    Faculty
                  </TableCell>
                  <TableCell style={{ color: "#fff" }} align='center'>
                    Subject
                  </TableCell>
                  <TableCell style={{ color: "#fff" }} align='center'>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {singleClass.facultyData?.map((row, index) => (
                  <TableRow
                    style={{
                      background: `${index % 2 !== 0 ? "#F2F2F2" : "#fff"}`,
                    }}
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align='center'>{row.faculty}</TableCell>
                    <TableCell align='center'>{row.subject}</TableCell>
                    <TableCell align='center'>
                      <Button
                        onClick={() => {
                          if (window.confirm("Are you sure")) {
                            RemoveFacutyToClass(id, row)
                            setCount(count + 1)
                          }
                        }}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <SubmitButton fullWidth />
        </Form>
      </Formik>
    </div>
  )
}

export default ClassForm
