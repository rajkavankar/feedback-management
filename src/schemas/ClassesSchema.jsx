import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export const ClassSchema = [
  {
    Header: "title",
    accessor: (row) => row.data.title,
  },
  {
    Header: "course",
    accessor: (row) => row.data.course,
  },
  {
    Header: "division",
    accessor: (row) => row.data.division,
  },
  {
    Header: "semester",
    accessor: (row) => row.data.sem,
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => {
      return (
        <>
          <Button
            variant='contained'
            sx={{ mr: 3 }}
            component={Link}
            to={`/single-class/${row.original.id}`}>
            View
          </Button>
        </>
      )
    },
  },
]
