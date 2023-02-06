import React, { useContext } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Grid } from "@mui/material"
import TextInputWrapper from "../components/formik-components/TextInputWrapper"
import CheckboxWrapper from "../components/formik-components/CheckBoxWrapper"
import SubmitButton from "../components/formik-components/SubmitButton"
import { UserContext } from "../context/UserContext"

const UsersForm = () => {
  const { addUser } = useContext(UserContext)
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("email is required"),
    email: Yup.string().required("email is required").email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "minimum 8 charecter required"),
    confirmPassword: Yup.string()
      .required("confirm password required")
      .oneOf([Yup.ref("password"), ""], "Confirm password should match"),
    isAdmin: Yup.boolean(),
  })

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)

    const { name, email, password, isAdmin } = values
    addUser(name, email, password, isAdmin)

    onSubmitProps.resetForm()
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextInputWrapper name='name' label='name' />
            </Grid>
            <Grid item md={6}>
              <TextInputWrapper type='email' name='email' label='email' />
            </Grid>
            <Grid item md={6}>
              <TextInputWrapper
                type='password'
                name='password'
                label='password'
              />
            </Grid>
            <Grid item md={6}>
              <TextInputWrapper
                type='password'
                name='confirmPassword'
                label='confirm password'
              />
            </Grid>
            <Grid item md={12}>
              <CheckboxWrapper
                name='isAdmin'
                legend='Choose for admin'
                label='Is Admin'
              />
            </Grid>
            <Grid item md={12}>
              <SubmitButton fullWidth={true} />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  )
}

export default UsersForm
