import React, { useContext } from "react"
import { Formik, Form } from "formik"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"
import TextInputWrapper from "../components/formik-components/TextInputWrapper"
import SubmitButton from "../components/formik-components/SubmitButton"
import { CourseContext } from "../context/CourceContext"

const CourseForm = () => {
  const navigate = useNavigate()
  const { addCourse } = useContext(CourseContext)
  const initialValues = {
    title: "",
    year: 1,
  }
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    years: Yup.number()
      .required("Year is required")
      .min(1, "Minimum one year is required"),
  })

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)
    const { title, years } = values
    addCourse(title, years)
    onSubmitProps.resetForm()
    navigate("/courses")
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <TextInputWrapper type='text' name='title' label='Add course' />
          <TextInputWrapper type='number' name='years' label='Add year' />

          <SubmitButton fullWidth />
        </Form>
      </Formik>
    </div>
  )
}

export default CourseForm
