import React from "react"
import FormPage from "../../components/FormPage"
import ClassForm from "../../forms/ClassForm"

const AddClassPage = () => {
  return (
    <div>
      <FormPage title='Add Class' location='/classes'>
        <ClassForm />
      </FormPage>
    </div>
  )
}

export default AddClassPage
