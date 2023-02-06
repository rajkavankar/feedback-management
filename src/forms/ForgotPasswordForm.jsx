import React, { useContext } from "react"
import { Formik, Form } from "formik"
import Flex from "../components/Flex"
import * as Yup from "yup"
import TextInputWrapper from "../components/formik-components/TextInputWrapper"
import SubmitButton from "../components/formik-components/SubmitButton"
import { UserContext } from "../context/UserContext"

const ForgotPasswordForm = () => {
  const { forgotPassword } = useContext(UserContext)
  const initialValues = {
    email: "",
  }
  const validationSchema = Yup.object({
    email: Yup.string().required("email is required").email("Invalid email"),
  })
  const onSubmit = (values, onSubmitProps) => {
    console.log(values)
    const { email } = values
    forgotPassword(email)
    onSubmitProps.resetForm()
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <Flex>
            <h2>Forgot password</h2>
          </Flex>
          <TextInputWrapper
            type='email'
            name='email'
            label='email'
            placeholder='Enter email'
          />

          <SubmitButton fullWidth />
        </Form>
      </Formik>
    </div>
  )
}

export default ForgotPasswordForm
