import React, { useContext, useEffect } from "react"
import FormPage from "../../components/FormPage"
import { useParams } from "react-router-dom"
import { Grid, List, ListItem, Divider, Button, Box } from "@mui/material"
import { FeedbackContext } from "../../context/FeedbackContext"
import Flex from "../../components/Flex"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts"
import { FaStar } from "react-icons/fa"

const SingleFeedbackPage = () => {
  const { fetchSingleFeedback, singleFeedback, deleteFeedback } =
    useContext(FeedbackContext)
  const { id } = useParams()
  useEffect(() => {
    fetchSingleFeedback(id)
  }, [fetchSingleFeedback, id])

  const punctualityData = []
  const testsData = []

  singleFeedback.feedbacks?.forEach((data, i) =>
    punctualityData.push(parseInt(data.punctuality))
  )

  singleFeedback.feedbacks?.forEach((data, i) =>
    testsData.push(parseInt(data.tests))
  )

  const punctualityTotal = punctualityData.reduce((total, data) => {
    return total + data
  }, 0)

  const testsTotal = testsData.reduce((total, data) => {
    return total + data
  }, 0)

  const avgScore =
    (punctualityTotal + testsTotal) / singleFeedback.feedbacks?.length

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
                  <strong>Faculty:</strong> {singleFeedback.faculty}
                </p>
              </ListItem>
              <Divider />
              <ListItem>
                <p>
                  <strong>Subject:</strong> {singleFeedback.subject}
                </p>
              </ListItem>
              <Divider />
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#CAD5E2",
            px: 2,
            py: 2,
            m: 2,
            borderRadius: 3,
          }}>
          <h1>Average score</h1>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}>
            {avgScore.toFixed(1)} <FaStar color='#E8BD0D' />
          </h1>
        </Box>

        <h1>Total feedbacks {singleFeedback.feedbacks?.length}</h1>

        <ResponsiveContainer width='100%' aspect={3}>
          <LineChart data={singleFeedback.feedbacks}>
            <Legend verticalAlign='top' height={36} />
            <Line dataKey='punctuality' stroke='red' />
            <Line dataKey='tests' stroke='blue' />
            <CartesianGrid stroke='#ccc' />
            <XAxis />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </FormPage>
    </div>
  )
}

export default SingleFeedbackPage
