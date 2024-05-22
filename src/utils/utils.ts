import {SelectProps} from "antd"
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

const baseURL = "https://it-center-admin-panel.vercel.app/api/"
export const customFetch = axios.create({
  baseURL: baseURL,
})

export function generateRandomNumber(): number {
  let result = 0
  for (let i = 0; i < 6; i++) {
    result = result * 10 + Math.floor(Math.random() * 10)
  }
  return result
}

export const formatPhoneNumber = (value: string) => {
  // Raqamlardan boshqa hamma narsani olib tashlaymiz
  const cleaned = ("" + value).replace(/\D/g, "")

  // Kirilgan raqamlar soni bo'yicha probellar qo'shamiz
  if (cleaned.length <= 2) {
    return cleaned
  }
  if (cleaned.length <= 5) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2)}`
  }
  if (cleaned.length <= 7) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`
  }
  if (cleaned.length <= 9) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(
      5,
      7
    )} ${cleaned.slice(7)}`
  }

  // Agar raqamlar soni 9 bo'lsa, formatni to'liq kiritamiz
  return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(
    5,
    7
  )} ${cleaned.slice(7, 9)}`
}

export const selectGroup: SelectProps["options"] = [
  {
    label: "Kotlin",
    value: "Kotlin",
    emoji:
      "https://mathiasfrohlich.gallerycdn.vsassets.io/extensions/mathiasfrohlich/kotlin/1.7.1/1581441165235/Microsoft.VisualStudio.Services.Icons.Default",
    desc: "Kotlin",
  },
  {
    label: "Java",
    value: "Java",
    emoji: "https://www.svgrepo.com/show/303388/java-4-logo.svg",
    desc: "Java",
  },
  {
    label: "C++",
    value: "C++",
    emoji:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
    desc: "C++",
  },
  {
    label: "Python",
    value: "Python",
    emoji:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/1200px-Python_logo_51.svg.png",
    desc: "Python",
  },
  {
    label: "Frontend",
    value: "Frontend",
    emoji:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    desc: "Frontend",
  },
  {
    label: "Android",
    value: "Android",
    emoji:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Android_logo_2019.png/640px-Android_logo_2019.png",
    desc: "Android",
  },
  {
    label: "Literacy",
    value: "Literacy",
    emoji:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/768px-Circle-icons-computer.svg.png",
    desc: "Literacy",
  },
]
