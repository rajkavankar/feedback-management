import { useState } from "react"
import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom"
export const FeedbackSchema = [
  {
    Header: "Title",
    accessor: (row) => row.data.title,
  },
  {
    Header: "Faculty",
    accessor: (row) => row.data.faculty,
  },
  {
    Header: "Subject",
    accessor: (row) => row.data.subject,
  },
  {
    Header: "Course",
    accessor: (row) => row.data.course,
  },
  {
    Header: "Total feedbacks",
    accessor: (row) => row.data.feedbacks.length,
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => {
      const [copyText, setCopyText] = useState("Copy link")

      return (
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to={`/single-feedback/${row.original.id}`}
              sx={{ mb: 1 }}>
              View Feedback
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => {
                navigator.clipboard.writeText(row.original.data.feedbackLink)
                setCopyText("copied")
                setTimeout(() => {
                  setCopyText("Copy link")
                }, 1000)
              }}>
              {copyText}
            </Button>
          </Grid>
        </Grid>
      )
    },
  },
]
