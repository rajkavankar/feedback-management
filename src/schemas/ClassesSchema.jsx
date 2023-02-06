import { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { ClassContext } from "../context/ClassContext"
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
      const { deleteClass } = useContext(ClassContext)

      return (
        <>
          <Button
            variant='contained'
            sx={{ mr: 3 }}
            component={Link}
            to={`/single-class/${row.original.id}`}>
            View
          </Button>

          <Button
            variant='contained'
            color='error'
            onClick={() =>
              window.confirm("Are you sure")
                ? deleteClass(row.original.id)
                : null
            }>
            Delete
          </Button>
        </>
      )
    },
  },
]
