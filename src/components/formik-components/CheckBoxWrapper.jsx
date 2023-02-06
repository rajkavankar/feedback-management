import React from "react"
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material"
import { useField, useFormikContext } from "formik"

const CheckBoxWrapper = ({ name, label, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (e) => {
    const { checked } = e.target
    setFieldValue(name, checked)
  }

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  }

  const configFormContol = {}
  if (meta && meta.touched && meta.error) {
    configFormContol.error = true
  }

  return (
    <FormControl {...configFormContol}>
      <FormLabel component='legend'>{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  )
}

export default CheckBoxWrapper
