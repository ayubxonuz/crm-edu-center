let categorys: ICategory[] = [
  {
    id: 1,
    image:
      "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
    language: "Kotlin",
  },
  {
    id: 2,
    image: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
    language: "Java",
  },
  {
    id: 3,
    image:
      "https://logolook.net/wp-content/uploads/2022/12/Python-Software-Foundation-Emblem.png",
    language: "Python",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    language: "C++",
  },
  {
    id: 5,
    image:
      "https://logos-world.net/wp-content/uploads/2023/08/Scratch-Emblem.png",
    language: "Scratch",
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    language: "HTML",
  },
  {
    id: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    language: "CSS",
  },
  {
    id: 8,
    image:
      "https://miro.medium.com/v2/resize:fit:600/1*uHlx-j01g5ybkJ2d_8dtyQ.png",
    language: "Frontend",
  },
  {
    id: 9,
    image:
      "https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png",
    language: "JavaScript",
  },
  {
    id: 10,
    image:
      "https://backend.epark.uz/coursephoto/Algoritmik_dasturlash_1627468540.png",
    language: "Kompyuter svodxonligi",
  },
  {
    id: 11,
    image:
      "https://lizenzworld.de/632-thickbox_default/microsoft-office-2016-standard.jpg",
    language: "Microsoft Office",
  },
]

export const getCategory = () => categorys
export const addCategory = (category: ICategory) => {
  categorys.push(category)
}

export const deleteCategory = (id: number) => {
  categorys = categorys.filter((category) => category.id !== id)
}

export const updateCategory = (id: number, image: string, language: string) => {
  const category = categorys.find((category) => category.id === id)
  if (category) {
    category.image = image
    category.language = language
  } else {
    throw new Error("NO CATEGORY FOUND")
  }
}

export const getById = (id: number) => {
  return categorys.find((category) => category.id === id)
}
