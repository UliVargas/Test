import { supabase } from '../../lib/supabase/client'

export const loginService = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({
    email,
    password
  })
}
