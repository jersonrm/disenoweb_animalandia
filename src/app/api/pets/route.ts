import { NextResponse } from 'next/server'

const pets = [
  { 
    id: 1, 
    name: "Max", 
    age: "3", 
    category: "puppy", 
    type: "Perro", 
    imageUrl: "/pets/max.jpg" 
  },
  { 
    id: 2, 
    name: "Luna", 
    age: "2", 
    category: "young", 
    type: "Gato", 
    imageUrl: "/pets/luna.jpg" 
  },
  { 
    id: 3, 
    name: "Rocky", 
    age: "5", 
    category: "senior", 
    type: "Perro", 
    imageUrl: "/pets/rocky.jpg" 
  }
]

export async function GET() {
  return NextResponse.json(pets)
}