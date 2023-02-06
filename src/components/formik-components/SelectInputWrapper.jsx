import React from "react"
import { TextField, MenuItem } from "@mui/material"
import { useField, useFormikContext } from "formik"

const SelectInputWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (e) => {
    const { value } = e.target
    setFieldValue(name, value)
  }

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    variant: "standard",
    onChange: handleChange,
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true
    configSelect.helperText = meta.error
  }

  return (
    <TextField {...configSelect} sx={{ my: 1 }}>
      {options.map((item, pos) => (
        <MenuItem key={pos} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectInputWrapper
