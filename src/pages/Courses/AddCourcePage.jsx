import React from "react"
import FormPage from "../../components/FormPage"
import CoursesForm from "../../forms/CourseForm"

const AddCourcePage = () => {
  return (
    <div>
      <FormPage title='Add Course' location='/courses'>
        <CoursesForm />
      </FormPage>
    </div>
  )
}

export default AddCourcePage
