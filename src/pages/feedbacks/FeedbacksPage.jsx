import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, Button, Grid } from "@mui/material"
import Sidebar from "../../components/Sidebar"
import DisplayCard from "../../components/DisplayCard"
import { FeedbackContext } from "../../context/FeedbackContext"
import Flex from "../../components/Flex"

const FeedbacksPage = () => {
  const { feedbacks, fetchFeedbacks } = useContext(FeedbackContext)
  const [copyText, setCopyText] = useState("Copy link")

  useEffect(() => {
    fetchFeedbacks()
  }, [fetchFeedbacks])
  console.log(feedbacks)

  return (
    <div>
      <Sidebar>
        <Container>
          <h1>Feedbacks </h1>
          {feedbacks.map((feedback, index) => (
            <DisplayCard key={index} sx={{ my: 2, p: 5 }}>
              <Grid container>
                <Grid item lg={10}>
                  <h2 sx={{ mb: 3 }}>
                    {feedback.data.title} ({feedback.data.year})
                  </h2>
                  <p>
                    Div: {feedback.data.div} sem: {feedback.data.sem}
                  </p>
                </Grid>
                <Grid item lg={2}>
                  <Flex direction='column'>
                    <Button
                      variant='contained'
                      fullWidth
                      component={Link}
                      to={`/single-feedback/${feedback.id}`}
                      sx={{ mb: 1 }}>
                      View Feedback
                    </Button>
                    <Button
                      variant='contained'
                      fullWidth
                      color='secondary'
                      onClick={() => {
                        navigator.clipboard.writeText(
                          feedback.data.feedbackLink
                        )
                        setCopyText("copied")
                        setTimeout(() => {
                          setCopyText("Copy link")
                        }, 1000)
                      }}>
                      {copyText}
                    </Button>
                  </Flex>
                </Grid>
              </Grid>
            </DisplayCard>
          ))}
        </Container>
      </Sidebar>
    </div>
  )
}

export default FeedbacksPage
