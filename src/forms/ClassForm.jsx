import React, { useContext, useEffect } from "react"
import { Formik, Form } from "formik"
import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import * as Yup from "yup"
import TextInputWrapper from "../components/formik-components/TextInputWrapper"
import SelectInputWrapper from "../components/formik-components/SelectInputWrapper"
import SubmitButton from "../components/formik-components/SubmitButton"
import { ClassContext } from "../context/ClassContext"
import { CourseContext } from "../context/CourceContext"

const ClassForm = () => {
  const navigate = useNavigate()
  const { addClass } = useContext(ClassContext)
  const { courses, fetchCourses } = useContext(CourseContext)

  useEffect(() => {
    fetchCourses()
  }, [])

  let courseOptions = []
  courses.forEach((course) => {
    courseOptions.push(course.data.title)
  })

  const initialValues = {
    title: "",
    year: 1,
    division: "",
    sem: 1,
    course: "",
  }
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    division: Yup.string().required("Division is required"),
    course: Yup.string().required("Course is required"),
    year: Yup.number()
      .required("Year is required")
      .min(1, "Minimum one year is required"),
    sem: Yup.number()
      .required("Sem is required")
      .min(1, "Minimum one sem is required"),
  })

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)
    const { title, sem, division, year, course } = values
    addClass(title, sem, division, year, course)
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
              <TextInputWrapper type='number' name='year' label='Add year' />
            </Grid>

            <Grid item lg={12}>
              <SelectInputWrapper
                name='course'
                label='Select Course'
                options={courseOptions}
              />
            </Grid>
          </Grid>

          <SubmitButton fullWidth />
        </Form>
      </Formik>
    </div>
  )
}

export default ClassForm
