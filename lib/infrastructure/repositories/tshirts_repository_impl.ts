import type { TshirtsRepository } from '@/lib/domain/repositories/tshirts_repository'
import type { Tshirt, TshirtInsert } from '@/types/database'
import type { TshirtsDatasource } from '../datasources/tshirts_datasource'

export class TshirtsRepositoryImpl implements TshirtsRepository {

  constructor(private datasource: TshirtsDatasource) {}
  getTshirts(): Promise<Tshirt[]> {
    return this.datasource.getAllTshirts()
  }
  getTshirt(id: number): Promise<Tshirt | null> {
    return this.datasource.getTshirtById(id)
  }
  createTshirt(tshirt: TshirtInsert): Promise<Tshirt> {
    return this.datasource.createTshirt(tshirt)
  }
  updateTshirt(id: number, updates: Partial<Tshirt>): Promise<Tshirt> {
    return this.datasource.updateTshirt(id, updates)
  }
  deleteTshirt(id: number): Promise<void> {
    return this.datasource.deleteTshirt(id)
  }
}