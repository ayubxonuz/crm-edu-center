interface IStudents {
  id: number
  fullName: string
  birthday: string
  address: string
  group: string
  phone: string
  userPhoto: string
  userPercentage: number
}

interface ICategory {
  id: number
  image: string
  language: string
}

interface IAds {
  id: number
  image: string
}

interface ILessons {
  id: number
  lessonName: string
  language:
    | "Java"
    | "Python"
    | "Kotlin"
    | "C++"
    | "Scratch"
    | "Literacy"
    | "Android"
    | "JavaScript"
    | "Frontend"
  title: string
  videoLink: string
  level: "begin" | "free" | "advanced" | "medium"
}
