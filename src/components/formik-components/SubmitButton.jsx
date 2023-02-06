import React from "react"
import { Button } from "@mui/material"
import { useFormikContext } from "formik"

const SubmitButton = ({ ...otherProps }) => {
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  const configSubmit = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    onClick: handleSubmit,
  }
  return (
    <Button {...configSubmit} sx={{ my: 1 }}>
      submit
    </Button>
  )
}

export default SubmitButton
