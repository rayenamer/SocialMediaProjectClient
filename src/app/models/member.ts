import { Photo } from "./photo"

export interface Member {
[x: string]: any
    id: number
    userName: string
    age: number
    photoUrl: string
    knownAs: string
    created: Date
    lastActive: Date
    gender: string
    introduction: string
    lookingFor: string
    city: string
    country: string
    photos: Photo[]
  }
  

  