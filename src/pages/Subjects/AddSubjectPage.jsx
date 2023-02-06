import React from "react"
import FormPage from "../../components/FormPage"
import SubjectForm from "../../forms/SubjectForm"

const AddSubjectPage = () => {
  return (
    <div>
      <FormPage title='Add subject' location='/subjects'>
        <SubjectForm />
      </FormPage>
    </div>
  )
}

export default AddSubjectPage
