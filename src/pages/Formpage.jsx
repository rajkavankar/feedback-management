import React, { useContext, useEffect } from "react"
import { Formik, Form, Field } from "formik"
import { RadioGroup } from "formik-mui"
import {
  Container,
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
} from "@mui/material"
import { useParams } from "react-router-dom"
import DisplayCard from "../components/DisplayCard"
import { ClassContext } from "../context/ClassContext"

const Formpage = () => {
  const { singleClass, fetchSingleClass } = useContext(ClassContext)
  const { id } = useParams()
  useEffect(() => {
    fetchSingleClass(id)
  }, [])

  const initialValues = {
    punctuality: [],
    tests: [],
  }

  const onSubmit = (values) => {
    const { punctuality, tests } = values
    // console.log(punctuality)
    // console.log(tests)
    let formData = {}
    const faculties = []
    for (let val in singleClass.facultyData) {
      faculties.push(singleClass.facultyData[val].faculty)
    }
    // console.log(faculties)

    let result = []

    faculties.forEach((item, index) => {
      result.push({
        faculty: item,
        punctuality: punctuality[index],
        texts: tests[index],
      })
    })

    console.log(result)
  }

  return (
    <div>
      <Container sx={{ my: 5 }}>
        <Box sx={{ px: 4, pt: 4, pb: 2, background: "#26a69a" }}>
          <h1>
            {singleClass.title} ({singleClass.year}) division{" "}
            {singleClass.division} semester {singleClass.sem}
          </h1>
        </Box>
        <DisplayCard>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ submitForm }) => (
              <Form>
                {singleClass.facultyData?.map((data, index) => (
                  <div key={index}>
                    <h2>
                      {data.faculty} ~ {data.subject}
                    </h2>
                    <FormControl>
                      <FormLabel>punctuality</FormLabel>
                      <Field
                        component={RadioGroup}
                        name={`punctuality[${index}]`}>
                        <FormControlLabel
                          value='excellent'
                          control={<Radio />}
                          label='Excellent'
                        />
                        <FormControlLabel
                          value='good'
                          control={<Radio />}
                          label='Good'
                        />
                        <FormControlLabel
                          value='average'
                          control={<Radio />}
                          label='Average'
                        />
                      </Field>
                    </FormControl>
                    <br />
                    <FormControl>
                      <FormLabel>Tests</FormLabel>
                      <Field component={RadioGroup} name={`tests[${index}]`}>
                        <FormControlLabel
                          value='excellent'
                          control={<Radio />}
                          label='Excellent'
                        />
                        <FormControlLabel
                          value='good'
                          control={<Radio />}
                          label='Good'
                        />
                        <FormControlLabel
                          value='average'
                          control={<Radio />}
                          label='Average'
                        />
                      </Field>
                    </FormControl>
                  </div>
                ))}

                <Button
                  variant='contained'
                  color='primary'
                  onClick={submitForm}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </DisplayCard>
      </Container>
    </div>
  )
}

export default Formpage
