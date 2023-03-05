import React from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import ProfilePage from "./pages/ProfilePage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import UsersPage from "./pages/Users/UsersPage"
import PrivateRoute from "./components/PrivateRoute"
import SingleUserPage from "./pages/Users/SingleUserPage"
import { UserProvider } from "./context/UserContext"
import { SubjectsProvider } from "./context/SubjextsContext"
import { CourseProvider } from "./context/CourceContext"
import SubjectsPage from "./pages/Subjects/SubjectsPage"
import AddSubjectPage from "./pages/Subjects/AddSubjectPage"
import AddCourcePage from "./pages/Courses/AddCourcePage"
import CoursePage from "./pages/Courses/CoursePage"
import ClassesPage from "./pages/Classes/ClassesPage"
import AddClassPage from "./pages/Classes/AddClassPage"
import { ClassProvider } from "./context/ClassContext"
import UpadateClassPage from "./pages/Classes/UpadateClassPage"
import SingleClassPage from "./pages/Classes/SingleClassPage"
import Formpage from "./pages/Formpage"
import { FeedbackProvider } from "./context/FeedbackContext"
import ExitPage from "./pages/ExitPage"
import FeedbacksPage from "./pages/feedbacks/FeedbacksPage"
import SingleFeedbackPage from "./pages/feedbacks/SingleFeedbackPage"
import AddUserPage from "./pages/Users/AddUserPage"

const App = () => {
  return (
    <div>
      <UserProvider>
        <SubjectsProvider>
          <CourseProvider>
            <ClassProvider>
              <FeedbackProvider>
                <ToastContainer
                  autoClose={2000}
                  position='top-center'
                  theme='colored'
                />
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route
                    path='/forgot-password'
                    element={<ForgotPasswordPage />}
                  />
                  {/* Secured routes */}
                  <Route path='/dashboard' element={<PrivateRoute />}>
                    <Route path='/dashboard' element={<DashboardPage />} />
                  </Route>
                  <Route path='/users' element={<UsersPage />} />
                  <Route path='/add-user' element={<AddUserPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/user/:id' element={<SingleUserPage />} />
                  <Route path='/subjects' element={<SubjectsPage />} />
                  <Route path='/add-subject' element={<AddSubjectPage />} />
                  <Route path='/courses' element={<CoursePage />} />
                  <Route path='/add-course' element={<AddCourcePage />} />
                  <Route path='/classes' element={<ClassesPage />} />
                  <Route path='/add-class' element={<AddClassPage />} />
                  <Route
                    path='/single-class/:id'
                    element={<SingleClassPage />}
                  />
                  <Route path='/form/:id/:feedbackId' element={<Formpage />} />
                  <Route
                    path='/update-class/:id'
                    element={<UpadateClassPage />}
                  />
                  <Route path='/feedbacks' element={<FeedbacksPage />} />
                  <Route
                    path='/single-feedback/:id'
                    element={<SingleFeedbackPage />}
                  />
                  <Route path='/done' element={<ExitPage />} />
                </Routes>
              </FeedbackProvider>
            </ClassProvider>
          </CourseProvider>
        </SubjectsProvider>
      </UserProvider>
    </div>
  )
}

export default App
