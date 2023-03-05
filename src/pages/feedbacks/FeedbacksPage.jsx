import React, { useContext, useEffect } from "react"
import { Container } from "@mui/material"
import Sidebar from "../../components/Sidebar"
import DisplayCard from "../../components/DisplayCard"
import { FeedbackContext } from "../../context/FeedbackContext"
import DisplayTable from "../../components/DisplayTable"
import { FeedbackSchema } from "../../schemas/FeedbackSchema"

const FeedbacksPage = () => {
  const { feedbacks, fetchFeedbacks } = useContext(FeedbackContext)

  useEffect(() => {
    fetchFeedbacks()
  }, [fetchFeedbacks])
  console.log(feedbacks)

  return (
    <div>
      <Sidebar>
        <Container>
          <DisplayCard>
            <DisplayTable
              title='Feedbacks'
              schema={FeedbackSchema}
              source={feedbacks}
            />
          </DisplayCard>
        </Container>
      </Sidebar>
    </div>
  )
}

export default FeedbacksPage
