import type { PostgrestError } from '@supabase/supabase-js'

export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public status?: number
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleError = (error: PostgrestError | null): void => {
  if(error) {
    throw new AppError(error.message, error.code)
  }
}