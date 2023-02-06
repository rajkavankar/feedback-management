import React from "react"
import { TextField } from "@mui/material"
import { useField } from "formik"

const DateInputWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name)
  const configDatePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "standard",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  }

  if (meta && meta.touched && meta.error) {
    configDatePicker.error = true
    configDatePicker.helperText = meta.error
  }

  return <TextField {...configDatePicker} sx={{ my: 1 }} />
}

export default DateInputWrapper
