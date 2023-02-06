import { createContext, useState } from "react"
import { toast } from "react-toastify"
import { v4 } from "uuid"
import {
  doc,
  setDoc,
  serverTimestamp,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore"
import { db } from "../firebase.config"

export const SubjectsContext = createContext()

export const SubjectsProvider = ({ children }) => {
  const dbname = "subjects"
  const [subjects, setSubjects] = useState([])

  //* Adding subject
  const addSubject = async (title) => {
    try {
      const formData = {
        title,
        timeStamp: serverTimestamp(),
      }

      await setDoc(doc(db, dbname, v4()), formData)
      toast.success("Subject added successfully")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  //*   Fetch all Subjects
  const fetchSubjects = async () => {
    try {
      const subjectsref = await collection(db, dbname)

      //   const q = query(tagsref)

      const querySnap = await getDocs(subjectsref)

      const subjects = []

      querySnap.forEach((doc) => {
        return subjects.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setSubjects(subjects)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  //*   Delete Subject
  const deleteSubject = async (id) => {
    try {
      await deleteDoc(doc(db, dbname, id))
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  return (
    <SubjectsContext.Provider
      value={{ addSubject, fetchSubjects, subjects, deleteSubject }}>
      {children}
    </SubjectsContext.Provider>
  )
}
