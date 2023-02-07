import React from "react"
import {
  FaHome,
  FaUserAlt,
  FaUsers,
  FaBook,
  FaBookReader,
  FaGraduationCap,
  FaServer,
} from "react-icons/fa"

const SidebarSchema = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <FaHome size={"1.5rem"} />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <FaUsers size={"1.5rem"} />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUserAlt size={"1.5rem"} />,
  },
  {
    title: "Subjects",
    path: "/subjects",
    icon: <FaBook size={"1.5rem"} />,
  },
  {
    title: "Courses",
    path: "/courses",
    icon: <FaGraduationCap size={"1.5rem"} />,
  },
  {
    title: "Classes",
    path: "/classes",
    icon: <FaBookReader size={"1.5rem"} />,
  },
  {
    title: "Feedbacks",
    path: "/feedbacks",
    icon: <FaServer size={"1.5rem"} />,
  },
]

export default SidebarSchema
