import React from "react"
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material"
import { useField, useFormikContext } from "formik"

const RadioGroupWrapper = ({ name, label, options, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (e) => {
    setFieldValue(name, e.target.value)
  }

  const configRadio = {
    ...field,
    onChange: handleChange,
  }

  const configFormContol = {}
  if (meta && meta.touched && meta.error) {
    configFormContol.error = true
    configFormContol.helperText = meta.error
  }

  return (
    <FormControl sx={{ m: 3 }}>
      <FormLabel>{legend}</FormLabel>
      <RadioGroup name={name} {...configRadio}>
        {options.map((value) => (
          <FormControlLabel control={<Radio />} label='The best!' />
        ))}
      </RadioGroup>
      {configFormContol.error && (
        <FormHelperText>{configFormContol.helperText}</FormHelperText>
      )}
    </FormControl>
  )
}

export default RadioGroupWrapper
