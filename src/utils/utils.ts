import axios from "axios"
export const tabsData = [
  {
    id: 1,
    name: "students",
    link: "/",
  },
  {
    id: 2,
    name: "courses",
    link: "/courses",
  },
  {
    id: 3,
    name: "lessons",
    link: "/lessons",
  },
]



export const studentsData = [
  {
    id: 1,
    fullName: "Ayubxon Yuldoshev",
    birthday: "13 June 2007",
    address: "Kokand",
    group: "Frontend ReactJS",
    phone: "+998 94 730 70 06",
  },
  {
    id: 1,
    fullName: "Ayubxon Yuldoshev",
    birthday: "13 June 2007",
    address: "Kokand",
    group: "Frontend ReactJS",
    phone: "+998 94 730 70 06",
  },
  {
    id: 1,
    fullName: "Ayubxon Yuldoshev",
    birthday: "13 June 2007",
    address: "Kokand",
    group: "Frontend ReactJS",
    phone: "+998 94 730 70 06",
  },
  {
    id: 1,
    fullName: "Ayubxon Yuldoshev",
    birthday: "13 June 2007",
    address: "Kokand",
    group: "Frontend ReactJS",
    phone: "+998 94 730 70 06",
  },
]

const baseURL = "https://it-center-backend-r4no.onrender.com/"
export const customFetch = axios.create({
  baseURL: baseURL,
})

export const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }
  return date.toLocaleDateString("en-GB", options)
}
