import React from "react"
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  Box,
  Chip,
  Checkbox,
  ListItemText,
  FormHelperText,
} from "@mui/material"
import { useField, useFormikContext } from "formik"

const MultipleSelectWrapper = ({ name, options, label, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (e) => {
    const { value } = e.target
    setFieldValue(name, value)
  }

  const configSelect = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "standard",
    onChange: handleChange,
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true
    configSelect.helperText = meta.error
  }

  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...configSelect}
        multiple
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                style={{ color: "#fff", background: "#000" }}
              />
            ))}
          </Box>
        )}>
        {options.map((value, pos) => (
          <MenuItem key={pos} value={value}>
            <Checkbox checked={Boolean(field.value?.includes(value))} />
            <ListItemText primary={value} />
          </MenuItem>
        ))}
      </Select>
      {configSelect.error && (
        <FormHelperText error>{configSelect.helperText}</FormHelperText>
      )}
    </FormControl>
  )
}

export default MultipleSelectWrapper
