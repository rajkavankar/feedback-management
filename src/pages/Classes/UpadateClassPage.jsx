import React from "react"
import FormPage from "../../components/FormPage"
import ClassUpdateForm from "../../forms/ClassUpdateForm"

const UpadateClassPage = () => {
  return (
    <div>
      <FormPage title='Update class' location='/classes'>
        <ClassUpdateForm />
      </FormPage>
    </div>
  )
}

export default UpadateClassPage
