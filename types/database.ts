export type Tshirt = {
  id?: number
  name: string
  price: number
  description: string
  sizes_available: Size[]
  created_at: string
}

export type TshirtInsert = {
  name: string
  price: number
  description: string
  sizes_available: string[]
}
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL'