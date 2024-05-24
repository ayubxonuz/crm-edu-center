type ISelectGroup =
  | "Java"
  | "Python"
  | "Kotlin"
  | "C++"
  | "Scratch"
  | "Literacy"
  | "Android"
  | "JavaScript"
  | "Frontend"

type TInputs = {
  fullName: string
  birthday: string
  address: string
  group: ISelectGroup[] | string
  personalPhone: string
  homePhone: string
  certificate: string
  graduated: string
}

interface IStudents {
  _id: string
  id: number
  fullName: string
  birthday: string
  address: string
  group: ISelectGroup[] | string
  personalPhone: string
  homePhone: string
  certificate: string
  graduated: string
  userPhoto: string | null
  userPercentage: number
  createdAt: Date
  updatedAt?: Date
}

interface ICategory {
  id: number
  image: string
  levelImage: string
  language: ISelectGroup
}

interface IAds {
  _id: string
  id: number
  image: string
  title: string
  createdAt: Date
  updatedAt: Date
}
type Level = "free" | "begin" | "medium" | "advanced"

interface ILessons {
  id: number
  lessonName: string
  languageName: string
  videoLink: string
  level: string
  homework: string
}
