import { supabase } from '../../lib/supabase/client'

export const createUserAuthService = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signUp({
    email,
    password
  })
}
