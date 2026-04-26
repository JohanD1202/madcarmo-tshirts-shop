import { supabase } from '@/lib/supabase/client'
import type { Tshirt, TshirtInsert } from '@/types/database'
import { handleError } from '@/lib/errors/AppError'


const TABLE = 'tshirt'

export async function getAllProducts(): Promise<Tshirt[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
  
    handleError(error)
  
  return data ?? []
}

export async function getProductById(id: number): Promise<Tshirt | null> {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .eq('id', id)
    .maybeSingle()
  
    handleError(error)
  
  return data
}

export async function createProduct(product: TshirtInsert): Promise<Tshirt> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(product)
    .select()
    .single()

    handleError(error)

  return data
}

export async function updateProduct(id: number, updates: Partial<Tshirt>): Promise<Tshirt> {
  const { data, error } = await supabase
    .from(TABLE)
    .update(updates)
    .eq('id', id)
    .select()
    .single()

    handleError(error)

  return data
}

export async function deleteProduct(id: number): Promise<void> {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq('id', id)

  handleError(error)
}
