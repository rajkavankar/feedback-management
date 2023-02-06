import { createContext, useState, useCallback } from "react"
import { toast } from "react-toastify"
import { v4 } from "uuid"
import {
  doc,
  setDoc,
  serverTimestamp,
  getDocs,
  getDoc,
  collection,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore"
import { db } from "../firebase.config"

export const ClassContext = createContext()

export const ClassProvider = ({ children }) => {
  const dbname = "classes"
  const [classes, setClasses] = useState([])
  const [singleClass, setSingleClass] = useState({})
  //* Adding a class
  const addClass = async (title, sem, division, year, course) => {
    try {
      const formData = {
        title,
        sem,
        division,
        year,
        course,
        timeStamp: serverTimestamp(),
      }

      await setDoc(doc(db, dbname, v4()), formData)
      toast.success("Class added successfully")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  //*   Fetch all classes
  const fetchClasses = useCallback(async () => {
    try {
      const classesref = await collection(db, dbname)

      //   const q = query(tagsref)

      const querySnap = await getDocs(classesref)

      const classes = []

      querySnap.forEach((doc) => {
        return classes.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setClasses(classes)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }, [])

  //* Add faculty to class
  const AddFacutyToClass = async (id, value) => {
    try {
      const docref = doc(db, dbname, id)
      await updateDoc(docref, {
        facultyData: arrayUnion(value),
      })
      toast.success("Faculty added successfully")
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  //* Remove faculty to class
  const RemoveFacutyToClass = async (id, value) => {
    try {
      const docref = doc(db, dbname, id)
      await updateDoc(docref, {
        facultyData: arrayRemove(value),
      })
      toast.success("Faculty removed successfully")
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  //* Fetch single Class
  const fetchSingleClass = useCallback(async (id) => {
    try {
      const docref = doc(db, dbname, id)
      const docSnap = await getDoc(docref)
      if (docSnap.exists()) {
        setSingleClass(docSnap.data())
      }
    } catch (e) {
      toast.error("Something went wrong")
    }
  }, [])

  //*   Delete class
  const deleteClass = async (id) => {
    try {
      await deleteDoc(doc(db, dbname, id))
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  //*   Update class
  const updateClass = async (id, data) => {
    try {
      const docref = doc(db, dbname, id)
      await updateDoc(docref, data)
      toast.success("Class details is updated successfully")
    } catch (e) {
      toast.error("Something went wrong")
    }
  }
  return (
    <ClassContext.Provider
      value={{
        addClass,
        fetchClasses,
        classes,
        fetchSingleClass,
        singleClass,
        deleteClass,
        updateClass,
        AddFacutyToClass,
        RemoveFacutyToClass,
      }}>
      {children}
    </ClassContext.Provider>
  )
}
