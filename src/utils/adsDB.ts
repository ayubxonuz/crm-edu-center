let ads: IAds[] = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/a3/40/13/a340132be1d3f8398429d7ede184e92e.jpg",
  },
  {
    id: 2,
    image: "https://xabar.uz/static/crop/3/4/920__95_3426688823.jpg",
  },
  {
    id: 3,
    image: "https://storage.googleapis.com/bitly-image-upload/Io5dcYdwtJ2",
  },
]

export const getAds = () => ads

export const addAd = (ad: IAds) => {
  ads.push(ad)
}

export const deleteAd = (id: number) => {
  ads = ads.filter((ad) => ad.id !== id)
}

export const updateAd = (id: number, image: string) => {
  const ad = ads.find((ad) => ad.id === id)
  if (ad) {
    ad.image = image
  } else {
    throw new Error("NO CATEGORY FOUND")
  }
}

export const getById = (id: number) => {
  return ads.find((ad) => ad.id === id)
}
