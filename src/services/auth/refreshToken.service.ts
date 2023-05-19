import { supabase } from '../../lib/supabase/client'

export const refreshTokenService = (refreshToken: string) => {
  return supabase.auth.refreshSession({
    refresh_token: refreshToken
  })
}
