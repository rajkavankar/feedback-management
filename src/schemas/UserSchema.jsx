import { Chip, Button } from "@mui/material"
import { Link } from "react-router-dom"

export const UserSchema = [
  {
    Header: "name",
    accessor: (row) => row.data.name,
  },
  {
    Header: "email",
    accessor: (row) => row.data.email,
  },
  {
    Header: "Role",
    accessor: "isAdmin",
    Cell: ({ row }) =>
      row.original.data.isAdmin === true ? (
        <Chip variant='soft' label='Admin' color='success' />
      ) : (
        <Chip variant='soft' label='User' color='primary' />
      ),
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => (
      <Button
        variant='contained'
        component={Link}
        to={`/user/${row.original.id}`}>
        View
      </Button>
    ),
  },
]
