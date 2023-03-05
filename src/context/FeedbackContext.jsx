import { createContext, useState, useCallback } from "react"
import { toast } from "react-toastify"
import { db } from "../firebase.config"
import { useNavigate } from "react-router-dom"
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  getDocs,
  collection,
  arrayUnion,
  deleteDoc,
} from "firebase/firestore"

export const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const dbname = "feedbacks"
  const navigate = useNavigate()
  const [feedbacks, setFeedbacks] = useState([])
  const [singleFeedback, setSingleFeedback] = useState({})
  //* Add feedback to database
  const addFeedback = async (
    title,
    div,
    course,
    sem,
    year,
    feedbackLink,
    id,
    faculty,
    subject
  ) => {
    try {
      const formData = {
        title,
        div,
        course,
        sem,
        year,
        id,
        faculty,
        subject,
        feedbackLink,
        feedbacks: [],
        timeStamp: serverTimestamp(),
      }

      await setDoc(doc(db, dbname, id), formData)
      toast.success("Feedback session created successfully")
    } catch (e) {
      console.log(e)
      toast.error("Something went wrong")
    }
  }

  //* Fetch all feedbacks
  const fetchFeedbacks = useCallback(async () => {
    try {
      const feedbackref = await collection(db, dbname)

      //   const q = query(tagsref)

      const querySnap = await getDocs(feedbackref)

      const feedbacks = []

      querySnap.forEach((doc) => {
        return feedbacks.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setFeedbacks(feedbacks)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }, [])

  //* fetch single feedback
  const fetchSingleFeedback = useCallback(async (id) => {
    try {
      const docref = doc(db, dbname, id)
      const docSnap = await getDoc(docref)
      if (docSnap.exists()) {
        setSingleFeedback(docSnap.data())
      }
    } catch (e) {
      toast.error("Something went wrong")
    }
  }, [])

  //* Getting feedback
  const getFeedback = async (value, id) => {
    try {
      const docref = doc(db, dbname, id)
      await updateDoc(docref, {
        feedbacks: arrayUnion({ ...value }),
      })
      navigate("/done")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  //*   Delete feedback
  const deleteFeedback = async (id) => {
    try {
      await deleteDoc(doc(db, dbname, id))
      navigate("/feedbacks")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        getFeedback,
        fetchFeedbacks,
        feedbacks,
        fetchSingleFeedback,
        singleFeedback,
        deleteFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}
