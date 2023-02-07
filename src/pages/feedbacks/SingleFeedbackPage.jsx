import React, { useContext, useEffect } from "react"
import FormPage from "../../components/FormPage"
import { useParams } from "react-router-dom"
import { Grid, List, ListItem, Divider, Button } from "@mui/material"
import { FeedbackContext } from "../../context/FeedbackContext"
import Flex from "../../components/Flex"

const SingleFeedbackPage = () => {
  const { fetchSingleFeedback, singleFeedback, deleteFeedback } =
    useContext(FeedbackContext)
  const { id } = useParams()
  useEffect(() => {
    fetchSingleFeedback(id)
  }, [fetchSingleFeedback, id])

  const handleDelete = () => {
    if (window.confirm("Are you sure")) {
      deleteFeedback(id)
    }
  }
  return (
    <div>
      <FormPage title='feedback' location='/feedbacks'>
        <Flex justify='between'>
          <h1>
            {singleFeedback.title} ({singleFeedback.year})
          </h1>
          <Button variant='contained' color='error' onClick={handleDelete}>
            Delete
          </Button>
        </Flex>
        <Grid container>
          <Grid item lg={6}>
            <List sx={{ mt: 5 }}>
              <ListItem>
                <p>
                  <strong>Course:</strong> {singleFeedback.course}
                </p>
              </ListItem>
              <Divider />
              <ListItem>
                <p>
                  <strong>Division:</strong> {singleFeedback.div}
                </p>
              </ListItem>
              <Divider />
              <ListItem>
                <p>
                  <strong>Semester:</strong> {singleFeedback.sem}
                </p>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <h1>Total feedbacks {singleFeedback.feedbacks?.length}</h1>
      </FormPage>
    </div>
  )
}

export default SingleFeedbackPage
