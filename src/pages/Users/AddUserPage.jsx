import React from "react"
import FormPage from "../../components/FormPage"
import UsersForm from "../../forms/UsersForm"

const AddUserPage = () => {
  return (
    <div>
      <FormPage title='Add user' location='/users'>
        <UsersForm />
      </FormPage>
    </div>
  )
}

export default AddUserPage
