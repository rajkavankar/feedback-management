import { createContext, useState, useCallback } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore"
import { db } from "../firebase.config"

export const CourseContext = createContext()

export const CourseProvider = ({ children }) => {
  const dbname = "courses"
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [singleCourse, setSingleCourse] = useState({})

  //* Adding course
  const addCourse = async (title, years) => {
    try {
      const formData = {
        title,
        years,
        timeStamp: serverTimestamp(),
      }

      await setDoc(doc(db, dbname, v4()), formData)
      toast.success("Course added successfully")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  //*   Fetch all Courses
  const fetchCourses = useCallback(async () => {
    try {
      const courcesRef = await collection(db, dbname)

      // const q = query(resourcePersonRef)

      const querySnap = await getDocs(courcesRef)

      const cources = []

      querySnap.forEach((doc) => {
        return cources.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setCourses(cources)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }, [])

  //* Fetch single Course
  const fetchSingleCourse = async (id) => {
    try {
      const docref = doc(db, dbname, id)
      const docSnap = await getDoc(docref)
      if (docSnap.exists()) {
        setSingleCourse(docSnap.data())
      }
    } catch (e) {
      toast.error("Something went wrong")
    }
  }

  //*   Delete course
  const deleteCourse = async (id) => {
    try {
      await deleteDoc(doc(db, dbname, id))
      navigate("/courses")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  //*   Update course
  const updateCourse = async (id, data) => {
    try {
      const docref = doc(db, dbname, id)
      await updateDoc(docref, data)
      toast.success("Course details is updated successfully")
    } catch (e) {
      toast.error("Something went wrong")
    }
  }

  return (
    <CourseContext.Provider
      value={{
        addCourse,
        fetchCourses,
        courses,
        fetchSingleCourse,
        singleCourse,
        deleteCourse,
        updateCourse,
      }}>
      {children}
    </CourseContext.Provider>
  )
}
