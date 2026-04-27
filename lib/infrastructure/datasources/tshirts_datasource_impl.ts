import { supabase } from '@/lib/supabase/client'
import type { Tshirt, TshirtInsert } from '@/types/database'
import { handleError } from '@/lib/errors/app_error'
import type { TshirtsDatasource } from './tshirts_datasource'

const TABLE = 'tshirt'

export class TshirtsDatasourceImpl implements TshirtsDatasource {

  async getAllTshirts(): Promise<Tshirt[]> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
    
      handleError(error)
    
    return data ?? []
  }

  async getTshirtById(id: number): Promise<Tshirt | null> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('id', id)
      .maybeSingle()
    
      handleError(error)
    
    return data
  }

  async createTshirt(tshirt: TshirtInsert): Promise<Tshirt> {
    const { data, error } = await supabase
      .from(TABLE)
      .insert(tshirt)
      .select()
      .single()

      handleError(error)

    return data
  }

  async updateTshirt(id: number, updates: Partial<Tshirt>): Promise<Tshirt> {
    const { data, error } = await supabase
      .from(TABLE)
      .update(updates)
      .eq('id', id)
      .select()
      .single()

      handleError(error)

    return data
  }

  async deleteTshirt(id: number): Promise<void> {
    const { error } = await supabase
      .from(TABLE)
      .delete()
      .eq('id', id)

    handleError(error)
  }
}
