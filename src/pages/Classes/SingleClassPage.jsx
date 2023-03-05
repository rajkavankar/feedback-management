import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ClassContext } from "../../context/ClassContext"
import { FeedbackContext } from "../../context/FeedbackContext"
import FormPage from "../../components/FormPage"
import { v4 } from "uuid"
import {
  List,
  ListItem,
  Divider,
  Button,
  Grid,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TextField,
  Box,
} from "@mui/material"
import Flex from "../../components/Flex"

const SingleClassPage = () => {
  const [formRoute, setFormRoute] = useState("")
  const [copyText, setCopyText] = useState("copy")
  const { singleClass, fetchSingleClass, deleteClass } =
    useContext(ClassContext)
  const { addFeedback } = useContext(FeedbackContext)
  const { id } = useParams()
  const url = window.location.href.split("/")
  url[3] = "form"

  const URI = url.join("/")

  useEffect(() => {
    setFormRoute(URI)
    fetchSingleClass(id)
  }, [fetchSingleClass, id, URI])

  const handleCopy = (index) => {
    const id = v4()
    const formLink = `${formRoute}/${id}`
    navigator.clipboard.writeText(formLink)
    addFeedback(
      singleClass.title,
      singleClass.division,
      singleClass.course,
      singleClass.sem,
      singleClass.year,
      formLink,
      id,
      singleClass.facultyData[index].faculty,
      singleClass.facultyData[index].subject
    )
    setCopyText("copied")

    setTimeout(() => {
      setCopyText("copy")
    }, 1000)
  }

  const handleDelete = () => {
    deleteClass(id)
  }
  return (
    <div>
      <FormPage title='Class' location='/classes'>
        <Flex justify='between' align='center'>
          <h1>
            {singleClass.title} ({singleClass.year})
          </h1>

          <div>
            <Button
              variant='contained'
              sx={{ mr: 2 }}
              component={Link}
              to={`/update-class/${id}`}>
              Update
            </Button>
            <Button variant='contained' color='error' onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Flex>
        <Grid container>
          <Grid item lg={6}>
            <List sx={{ mt: 5 }}>
              <ListItem>
                <p>
                  <strong>Course:</strong> {singleClass.course}
                </p>
              </ListItem>
              <Divider />
              <ListItem>
                <p>
                  <strong>Division:</strong> {singleClass.division}
                </p>
              </ListItem>
              <Divider />
              <ListItem>
                <p>
                  <strong>Semester:</strong> {singleClass.sem}
                </p>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        {/* <Box sx={{ my: 2 }}>
          <Grid container spacing={1}>
            <Grid item lg={8}>
              <TextField
                disabled
                variant='filled'
                value={formRoute}
                fullWidth
              />
            </Grid>
            <Grid item lg={2}>
              <Button variant='contained' onClick={handleCopy}>
                {copyText}
              </Button>
            </Grid>
          </Grid>
        </Box> */}
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow style={{ background: "#333" }}>
                <TableCell style={{ color: "#fff" }} align='center'>
                  Faculty
                </TableCell>
                <TableCell style={{ color: "#fff" }} align='center'>
                  Subject
                </TableCell>
                <TableCell style={{ color: "#fff" }} align='center'>
                  Get Feedback
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {singleClass.facultyData?.map((row, index) => (
                <TableRow
                  style={{
                    background: `${index % 2 !== 0 ? "#F2F2F2" : "#fff"}`,
                  }}
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align='center'>{row.faculty}</TableCell>
                  <TableCell align='center'>{row.subject}</TableCell>
                  <TableCell align='center'>
                    <Button
                      variant='contained'
                      size='sm'
                      onClick={() => handleCopy(index)}>
                      copy link
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </FormPage>
    </div>
  )
}

export default SingleClassPage
