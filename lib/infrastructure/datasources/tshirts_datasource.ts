import { Tshirt, TshirtInsert } from "@/types/database"

export interface TshirtsDatasource {
  getAllTshirts(): Promise<Tshirt[]>
  getTshirtById(id: number): Promise<Tshirt | null>
  createTshirt(product: TshirtInsert): Promise<Tshirt>
  updateTshirt(id: number, updates: Partial<Tshirt>): Promise<Tshirt>
  deleteTshirt(id: number): Promise<void>
}