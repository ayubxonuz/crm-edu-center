let students: IStudents[] = [
  {
    id: 24671,
    fullName: "Baxtiyorjonov Behruzbek",
    birthday: "13 Jun 2008",
    address: "Teliming",
    group: "Java, Kotlin",
    phone: "+998 91 311 52 43",
    userPercentage: 13,
    userPhoto: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
  {
    id: 14141,
    fullName: "Shamshodbek Rahmatullayev",
    birthday: "12 Apr 2007",
    address: "Qumqiyali",
    group: "Java, Kotlin",
    phone: "+998 91 311 52 43",
    userPercentage: 62,
    userPhoto: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
  {
    id: 63352,
    fullName: "Rustambek Rahmonov",
    birthday: "31 Mar 2000",
    address: "Beshkapa",
    group: "Python, C++",
    phone: "+998 91 311 52 43",
    userPercentage: 80,
    userPhoto: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
  {
    id: 12351,
    fullName: "Olmosbek Shavkatov",
    birthday: "99 Jun 1989",
    address: "Katta Turk",
    group: "Scratch",
    phone: "+998 91 311 52 43",
    userPercentage: 57,
    userPhoto: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
  {
    id: 13144,
    fullName: "Samandar Tursunboyev",
    birthday: "30 Jan 2000",
    address: "Qashqar",
    group: "Python, C++",
    phone: "+998 91 311 52 43",
    userPercentage: 90,
    userPhoto: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
  {
    id: 21312,
    fullName: "Qilichbek Shamshodbekov",
    birthday: "20 Oct 2010",
    address: "Kichik Turk",
    group: "Scratch",
    phone: "+998 91 311 52 43",
    userPercentage: 78,
    userPhoto: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
  {
    id: 41424,
    fullName: "Mirmuhsin Abrorov",
    birthday: "18 Nov 2002",
    address: "Qora Ko'rpa",
    group: "Java, Kotlin",
    phone: "+998 91 311 52 43",
    userPercentage: 100,
    userPhoto: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
]

export const getStudents = () => students

export const addStudents = (student: IStudents) => {
  students.push(student)
}
export const deleteStudent = (id: number) => {
  students = students.filter((student) => student.id !== id)
}

export const updateStudents = (
  id: number,
  fullName: string,
  birthday: string,
  address: string,
  group: string,
  phone: string,
  userPhoto: string,
  userPercentage: number
) => {
  const student = students.find((student) => student.id === id)
  if (student) {
    student.id = id
    student.fullName = fullName
    student.birthday = birthday
    student.address = address
    student.group = group
    student.phone = phone
    student.userPhoto = userPhoto
    student.userPercentage = userPercentage
  } else {
    throw new Error("NO POST FOUND")
  }
}

export const getById = (id: number) => {
  return students.find((student) => student.id === id)
}
