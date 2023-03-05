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
import { FeedbackContext } from "../context/FeedbackContext"

const Formpage = () => {
  const { singleClass, fetchSingleClass } = useContext(ClassContext)
  const { getFeedback, fetchSingleFeedback, singleFeedback } =
    useContext(FeedbackContext)
  const { id, index, feedbackId } = useParams()
  useEffect(() => {
    // fetchSingleClass(id)
    fetchSingleFeedback(feedbackId)
  }, [id])

  const initialValues = {
    punctuality: 0,
    tests: 0,
  }

  const onSubmit = (values) => {
    console.log(values)

    getFeedback(values, feedbackId)
  }

  return (
    <div>
      <Container sx={{ my: 5 }}>
        <Box sx={{ px: 4, pt: 4, pb: 2, background: "#26a69a" }}>
          <h1>
            {singleFeedback.title} ({singleFeedback.year}) division &nbsp;
            {singleFeedback.div} semester &nbsp; {singleFeedback.sem}
          </h1>
        </Box>
        <DisplayCard>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ submitForm }) => (
              <Form>
                <div>
                  <h2>
                    {singleFeedback.faculty} ~ {singleFeedback.subject}
                  </h2>
                  <FormControl>
                    <FormLabel>punctuality</FormLabel>
                    <Field component={RadioGroup} name='punctuality'>
                      <FormControlLabel
                        value={4}
                        control={<Radio />}
                        label='Excellent'
                      />
                      <FormControlLabel
                        value={3}
                        control={<Radio />}
                        label='Good'
                      />
                      <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label='Average'
                      />
                      <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label='Unsatisfied'
                      />
                    </Field>
                  </FormControl>
                  <br />
                  <FormControl>
                    <FormLabel>Tests</FormLabel>
                    <Field component={RadioGroup} name='tests'>
                      <FormControlLabel
                        value={4}
                        control={<Radio />}
                        label='Excellent'
                      />
                      <FormControlLabel
                        value={3}
                        control={<Radio />}
                        label='Good'
                      />
                      <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label='Average'
                      />
                      <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label='Unsatisfied'
                      />
                    </Field>
                  </FormControl>
                </div>

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
