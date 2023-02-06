import { useContext } from "react"
import { Button } from "@mui/material"
import { SubjectsContext } from "../context/SubjextsContext"
export const SubjectSchema = [
  {
    Header: "title",
    accessor: (row) => row.data.title,
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => {
      const { deleteSubject } = useContext(SubjectsContext)
      return (
        <>
          <Button
            variant='contained'
            color='error'
            onClick={() =>
              window.confirm("Are you sure")
                ? deleteSubject(row.original.id)
                : null
            }>
            Delete
          </Button>
        </>
      )
    },
  },
]
