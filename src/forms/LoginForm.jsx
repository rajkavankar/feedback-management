import React, { useContext } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import Flex from "../components/Flex"
import TextInputWrapper from "../components/formik-components/TextInputWrapper"
import SubmitButton from "../components/formik-components/SubmitButton"
import { UserContext } from "../context/UserContext"
// import { FaEye, FaEyeSlash } from "react-icons/fa"

const LoginForm = () => {
  const { onLogIn } = useContext(UserContext)
  //   const [isPassword, setIsPassword] = useState(true)
  const initialValues = {
    email: "",
    password: "",
  }
  const validationSchema = Yup.object({
    email: Yup.string().required("email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
  })

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)
    const { email, password } = values
    onLogIn(email, password)
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
            <h2>Login</h2>
          </Flex>
          <TextInputWrapper type='email' name='email' label='email' />
          <TextInputWrapper type='password' name='password' label='password' />

          <Flex justify='end'>
            <Link to='/forgot-password'>Forgot password?</Link>
          </Flex>
          <SubmitButton fullWidth />
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm
