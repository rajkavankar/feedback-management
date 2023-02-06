import { useContext } from "react"
import { Button } from "@mui/material"
import { CourseContext } from "../context/CourceContext"
export const CourseSchema = [
  {
    Header: "title",
    accessor: (row) => row.data.title,
  },
  {
    Header: "years",
    accessor: (row) => row.data.years,
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => {
      const { deleteCourse } = useContext(CourseContext)

      return (
        <>
          <Button
            variant='contained'
            color='error'
            onClick={() =>
              window.confirm("Are you sure")
                ? deleteCourse(row.original.id)
                : null
            }>
            Delete
          </Button>
        </>
      )
    },
  },
]
