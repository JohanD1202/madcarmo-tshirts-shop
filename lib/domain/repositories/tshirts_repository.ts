import type { Tshirt, TshirtInsert } from '@/types/database'

export interface TshirtsRepository {
  getTshirts(): Promise<Tshirt[]>
  getTshirt(id: number): Promise<Tshirt | null>
  createTshirt(product: TshirtInsert): Promise<Tshirt>
  updateTshirt(id: number, updates: Partial<Tshirt>): Promise<Tshirt>
  deleteTshirt(id: number): Promise<void>
}