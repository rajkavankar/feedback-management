import React, { useContext } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import TextInputWrapper from "../components/formik-components/TextInputWrapper"
import SubmitButton from "../components/formik-components/SubmitButton"
import { SubjectsContext } from "../context/SubjextsContext"

const SubjectForm = () => {
  const { addSubject } = useContext(SubjectsContext)
  const initialValues = {
    subject: "",
  }
  const validationSchema = Yup.object({
    subject: Yup.string().required("Subject is required"),
  })

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)
    const { subject } = values
    addSubject(subject)
    onSubmitProps.resetForm()
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <TextInputWrapper type='text' name='subject' label='Add subject' />

          <SubmitButton fullWidth />
        </Form>
      </Formik>
    </div>
  )
}

export default SubjectForm
