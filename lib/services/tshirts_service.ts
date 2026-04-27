import { TshirtsRepositoryImpl } from '@/lib/infrastructure/repositories/tshirts_repository_impl'
import { TshirtsDatasourceImpl } from '../infrastructure/datasources/tshirts_datasource_impl'

const repo = new TshirtsRepositoryImpl(new TshirtsDatasourceImpl())

export async function getTshirts() {
  return repo.getTshirts()
}